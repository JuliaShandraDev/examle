import {Action, createAction, props} from "@ngrx/store";
import {IForm} from "./form.reducer";

export enum FormActionsEnum {
  sendAction = '[Send form] sendAction',
}

export class SendAction implements Action {

  readonly type = FormActionsEnum.sendAction

  constructor(public payload: IForm) {}

}
export type FormActions = SendAction

