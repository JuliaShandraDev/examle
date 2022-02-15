import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from "../../../service/form/form-validators";
import {Store, select} from "@ngrx/store";

import {FormService} from "../../../service/form/form.service";
import {formStore, IForm} from "../../../reducers/form/form.reducer";
import {SendAction} from "../../../reducers/form/form.actions";
import {getStatusForm} from "../../../reducers";
import {formSelector} from "../../../reducers/form/form.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  public getForm$: Observable<IForm>;
  public formStore: IForm;
  public signUpForm: FormGroup;
  public messages = {
    required: 'This field is required',
    password: 'This password too short'
  }

  public formErrors = {
    name: '',
    email: '',
    password: '',
  };

  constructor(
    public form: FormBuilder,
    public FormService: FormService,
    public store$: Store,
  ) {}

  public submit() {
    this.FormService.markFormGroupTouched(this.signUpForm);

    this.store$.dispatch(new SendAction(this.formStore))
  }

  public buildForm() {
    this.signUpForm = this.form.group({
      name: ['', [Validators.required, CustomValidators.validateCharacters]],
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [Validators.minLength(5)]),
    });

    this.signUpForm.valueChanges.subscribe((data) => {
      this.formErrors = this.FormService.validateForm(this.signUpForm, this.formErrors, true)
    });
  }

  public ngOnInit() {
    this.buildForm();
    // @ts-ignore
    this.getForm$ = this.store$.pipe(select(formSelector));
  }

  enable(): void {
    this.signUpForm.enable();
  }

  disable(): void {
    this.signUpForm.disable();
  }

  subscribe(): void {
    this.signUpForm.valueChanges.subscribe(console.log);
  }

  resetForm(): void {
    this.signUpForm.reset();
  }
  resetValidationField(): void {
    this.signUpForm.markAsPristine();
    this.signUpForm.markAsUntouched();
    this.signUpForm.updateValueAndValidity();
  }
}
