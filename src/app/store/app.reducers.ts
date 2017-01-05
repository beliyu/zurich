import { combineReducers } from 'redux';
import { imeReducer, IIme } from './ime.reducer';

export interface IRootState {
  ime?: IIme[];
};

export const rootReducer = combineReducers<IRootState>({
  ime : imeReducer
});
