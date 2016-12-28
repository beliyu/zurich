import { NgRedux } from 'ng2-redux';
import { WhmService, WhModel } from './../wh.service';
import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';

xdescribe('Home', () => {
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
      WhmService, WhModel,
      NgRedux,
      HomeComponent
    ]
  }));

  it('should log ngOnInit', inject([ HomeComponent, WhModel, NgRedux ],
      (home: HomeComponent, _whm: WhmService, _ngRedux: NgRedux<any>) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
