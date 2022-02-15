import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRatingComponent } from './custom-rating/component/custom-rating.component';
import { LoaderComponent } from './loader/loader.component';
import { FormComponent } from './form/form.component';
import { CustomInputComponent } from "./custom-input/custom-input.component";

@NgModule({
  declarations: [
    CustomRatingComponent,
    LoaderComponent,
    FormComponent,
    CustomInputComponent
  ],
  exports: [
    CustomRatingComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
