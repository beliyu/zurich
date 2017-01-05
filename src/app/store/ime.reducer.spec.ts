import { imeReducer, IIme } from './ime.reducer';

describe('Ime Reducer', () => {
  let initState: IIme[];
  let dd = [{
    boja: 'bl',
    grad: 'Jarcujak',
    id: '1',
    ime: 'Igor'
  }];

  beforeEach(() => {
    initState = imeReducer(undefined, {
         type: 'IIME_ADD',
         payload: dd
        });
  });

  it('should add 1 record on IIME_ADD', () => {
    expect(initState.length).toBe(1);
  });

  it('should return all record on IIME_ALL', () => {
    const nextState = imeReducer(
      initState,
      {
        type: 'IIME_ALL',
        payload: dd
      }
    );
    expect(nextState.length).toBe(1);
    expect(nextState[0].id).toEqual('1');
  });

  it('should delete a record on IIME_DEL', () => {
    const nextState = imeReducer(
      initState,
      {
        type: 'IIME_DEL',
        payload: dd
      });
    expect(nextState.length).toBe(0);
  });

  it('should reset all records on RESET', () => {
    const nextState = imeReducer(
      initState,
      {
        type: 'RESET'
      });
    expect(nextState.length).toBe(0);
  });

  xit('should clear user data on IIME_TOGG', () => {
  let dd2 = [{
    boja: 're',
    grad: 'Jarcujak',
    id: '1',
    ime: 'Igor'
  }];
    const nextState = imeReducer(
      initState,
      {
        type: 'IIME_TOG',
        payload: dd2 });
    expect(nextState[0].boja).toEqual('re');
  });
});
