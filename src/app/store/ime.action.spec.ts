import { NgRedux } from 'ng2-redux';
import { ImeActions } from './ime.action';

class MockRedux extends NgRedux<any> {
  constructor() {
    super(null);
  }
  dispatch: () => {};
}

describe('imeAction creators', () => {
  let actions: ImeActions;
  let mockRedux: NgRedux<any>;
  let dd = [{
    boja: 'bl',
    grad: 'Jarcujak',
    id: '1',
    ime: 'Igor'
  }];

  beforeEach(() => {
    mockRedux = new MockRedux();
    actions = new ImeActions(mockRedux);
  });

  it('aAll() should dispatch IIME_ALL action', () => {
    const expectedAction = {
      type: 'IIME_ALL',
      payload: dd
    };

    spyOn(mockRedux, 'dispatch');
    actions.aAll(dd);

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('aAdd() should dispatch IIME_ADD action', () => {
    const expectedAction = {
      type: 'IIME_ADD',
      payload: dd
    };

    spyOn(mockRedux, 'dispatch');
    actions.aAdd(dd);

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('aTog() should dispatch IIME_TOGG action', () => {
    const expectedAction = {
      type: 'IIME_TOGG',
      payload: dd
    };

    spyOn(mockRedux, 'dispatch');
    actions.aTogg(dd);

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it('aDel() should dispatch IIME_DEL action', () => {
    const expectedAction = {
      type: 'IIME_DEL',
      payload: dd
    };

    spyOn(mockRedux, 'dispatch');
    actions.aDel(dd);

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });

});
