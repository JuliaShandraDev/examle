import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import {FiveComponent} from "./children/five/five.component";
import {SixComponent} from "./children/six/six.component";
import {ExampleTwoRoutingModule} from "./example-two-routing.module";
import {ExampleTwoComponent} from "./component/example-two.component";


@NgModule({
  declarations: [FiveComponent, SixComponent, ExampleTwoComponent],
  exports: [FiveComponent, SixComponent, ExampleTwoComponent],
  imports: [
    ExampleTwoRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class ExampleTwoModule { }
