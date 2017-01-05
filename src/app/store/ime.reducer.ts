export interface IIme {
        ime: string;
        grad: string;
        boja: string;
       id?: string;
};

export function imeReducer(
  state: IIme[] = [] ,
  action ): IIme[] {

  switch (action.type) {
    case 'IIME_ALL':
      return [ ...action.payload];
    case 'IIME_ADD':
      return [ ...state, action.payload];
    case 'IIME_DEL':
        let wdel = [];
        state.forEach(n => {
          if (action.payload.id !== n.id) wdel = [...wdel, n]; });
      return wdel;
    case 'IIME_TOGG':
        let wto = [];
        state.forEach(n => {
          wto = (action.payload.id !== n.id) ? [...wto, n] : [...wto, action.payload]; } );
      return wto;
    case 'RESET':
      return [] ;
    default:
      return state;
  }
}
