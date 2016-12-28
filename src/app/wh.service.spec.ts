import {
  inject,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  RequestMethod,
  Response,
  ResponseOptions,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import {
  WhmService,
  WhModel
} from './wh.service';

describe('whService', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      WhmService, WhModel
    ]
  }));

  it('whModel should be defined', () => {
      let wm = new WhModel('Dragan', 'Kraljevo');
    expect(wm.boja).toBe('bl');
  });

 it('getAll()',
    inject([WhmService, MockBackend], fakeAsync((whmService, mockBackend ) => {
     let res: WhModel;
     mockBackend.connections.subscribe(c => {
       expect(c.request.url).toBe('http://localhost:3004/WhM');
       expect(c.request.method).toBe(RequestMethod.Get);
       let response = new ResponseOptions({body: '{"ime": "Omer"}'});
       c.mockRespond(new Response(response));
     });
     whmService.getAll().subscribe((_res) => {
       res = _res;
     });
     tick();
     expect(res.ime).toBe('Omer');
   }))
 );

 it('Add()',
   inject([WhmService, MockBackend], fakeAsync((whmService, mockBackend ) => {
     let res: any;
     mockBackend.connections.subscribe(c => {
       expect(c.request.url).toBe('http://localhost:3004/WhM');
       expect(c.request.method).toBe(RequestMethod.Post);
     });
   }))
 );

 it('del()',
    inject([WhmService, MockBackend], fakeAsync((whmService, mockBackend ) => {
     let res: WhModel;
     let w = 'cyRt6Per';
     mockBackend.connections.subscribe(c => {
       expect(c.request.url).toBe('http://localhost:3004/WhM/' + w);
       expect(c.request.method).toBe(RequestMethod.Delete);
       let response = new ResponseOptions({body: '{"ime": "Omer"}'});
       c.mockRespond(new Response(response));
     });
     whmService.del(w).subscribe((_res) => {
       res = _res;
     });
     tick();
     expect(res.ime).toBe('Omer');
   }))
 );

 it('getOne()',
    inject([WhmService, MockBackend], fakeAsync((whmService, mockBackend ) => {
     let res: WhModel;
     let w = 'cyRt6Per';
     mockBackend.connections.subscribe(c => {
       expect(c.request.url).toBe('http://localhost:3004/WhM/' + w);
       expect(c.request.method).toBe(RequestMethod.Get);
       let response = new ResponseOptions({body: '{"ime": "Omer"}'});
       c.mockRespond(new Response(response));
     });
     whmService.getOne(w).subscribe((_res) => {
       res = _res;
     });
     tick();
     expect(res.ime).toBe('Omer');
   }))
 );

 it('togg()',
    inject([WhmService, MockBackend], fakeAsync((whmService, mockBackend ) => {
     let res: WhModel;
     let w = {boja: 'rd', id: 'ert4Sar'};
     mockBackend.connections.subscribe(c => {
       expect(c.request.url).toBe('http://localhost:3004/WhM/' + w.id);
       expect(c.request.method).toBe(RequestMethod.Patch);
       let response = new ResponseOptions({body: '{"ime": "Omer"}'});
       c.mockRespond(new Response(response));
     });
     whmService.togg(w).subscribe((_res) => {
       res = _res;
     });
     tick();
     expect(res.ime).toBe('Omer');
   }))
 );

});
