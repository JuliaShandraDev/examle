import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {ExampleThreeRoutingModule} from "./example-three-routing.module";
import { WeatherComponent } from './children/weather/weather.component';
import {ExampleThreeComponent} from "./component/example-three.component";
import {SharedModule} from "../shared/shared.module";
import { FormViewComponent } from './children/form-view/form-view.component';

@NgModule({
  declarations: [
    WeatherComponent,
    ExampleThreeComponent,
    FormViewComponent
  ],
  imports: [
    CommonModule,
    ExampleThreeRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExampleThreeModule { }
