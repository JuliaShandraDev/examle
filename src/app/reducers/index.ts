import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {IForm, formStore, formReducer} from "./form/form.reducer";
import {formSelector} from "./form/form.selectors";
import * as getSelector from 'src/app/reducers/form/form.selectors';


export interface IState {
  Loading: boolean;
  Loaded: boolean;
  IForm: IForm[];
}
export interface IState {
  [formStore]: IForm
}

export const reducers: ActionReducerMap<IState> = {
  // @ts-ignore
 [formStore]: formReducer,
};

export const getForm = (state: IState) => state[formStore];

export const getStatusForm = createSelector(getForm, getSelector.formSelector)

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
