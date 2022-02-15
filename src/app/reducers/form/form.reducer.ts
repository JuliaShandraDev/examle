import {FormActions, FormActionsEnum} from "./form.actions";

export const formStore = "formList"

export interface IForm {
  name: string;
  email:string;
  password: string;
}
const initialState: IForm = {
  name: '',
  email: '',
  password: '',
};
export const formReducer = (
  state = initialState,
    action: FormActions
) =>{
  switch(action.type) {
    case FormActionsEnum.sendAction:
      return {
        ...state,
        name: action.payload
      };
    case FormActionsEnum.sendAction:
      return {
        ...state,
        email: action.payload
      };
    case FormActionsEnum.sendAction:
      return {
        ...state,
        password: action.payload
      };
    default:
      return state;
  }
}
