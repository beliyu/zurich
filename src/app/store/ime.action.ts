import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IRootState } from './app.reducers';
import { IIme } from './ime.reducer';


@Injectable()
export class ImeActions {
  constructor(private _ngRedux: NgRedux<IRootState>) {}

  aAll(data: IIme[]) {
    this._ngRedux.dispatch({
      type: 'IIME_ALL',
      payload: data,
    });
  };

  aTogg(data: IIme[]) {
    this._ngRedux.dispatch({
      type: 'IIME_TOGG',
      payload: data,
    });
  };

  aAdd(data: IIme[]) {
    this._ngRedux.dispatch({
      type: 'IIME_ADD',
      payload: data,
    });
  };

  aDel(data: IIme[]) {
    this._ngRedux.dispatch({
      type: 'IIME_DEL',
      payload: data,
    });
  };

}
