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
import { OskyService } from './osky.service';

describe('oskyService', () => {
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
      OskyService
    ]
  }));

 it(' getAll() ',
    inject([OskyService, MockBackend], fakeAsync((oskyService, mockBackend ) => {
     let res: any;
     let rd: string = JSON.stringify( {'time': 1482928730, 'states': [
        ['7800ef', 'CES563  ', 'China', 1482928729, 1482928729,
            8.0659, 47.5316, 10972.8, false, 209.08, 282.36, 0, null],
        ['ade18c', 'N994AN0 ', 'United States', null, 1482928727,
            null, null, null, false, 0, 298, null, null],
        ['ac96b8', '', 'United States', 1482928723, 1482928723,
            -74.657, 41.1327, 5463.54, false, 148.01, 279.2, 14.31, null],
        ['4841b9', 'KLM1810 ', 'Kingdom of the Netherlands', 1482928729, 1482928729,
            8.238, 52.0266, 9753.6, false, 224.02, 285.31, 0, null],
        ['406b80', 'BAW58GV ', 'United Kingdom', 1482928728, 1482928729,
            8.3422, 47.7048, 10972.8, false, 235.17, 285.74, 0, null]
     ]});

     mockBackend.connections.subscribe(c => {
       let response = new ResponseOptions({body: rd});
       c.mockRespond(new Response(response));
     });
     oskyService.getAll().subscribe((_data) => {
       res = _data;
     });
     tick();
     expect(res.length).toBe(2);
   }))
 );

 it(' Url , Req method ',
    inject([OskyService, MockBackend], fakeAsync((oskyService, mockBackend ) => {
     let rd: string = JSON.stringify( {'time': 1482928730, 'states': [
        ['7800ef', 'CES563  ', 'China', 1482928729, 1482928729,
            8.0659, 47.5316, 10972.8, false, 209.08, 282.36, 0, null]
     ]});
     mockBackend.connections.subscribe(c => {
       expect(c.request.url).toBe('https://opensky-network.org/api/states/all');
       expect(c.request.method).toBe(RequestMethod.Get);
     });
     tick();
   }))
 );

});
