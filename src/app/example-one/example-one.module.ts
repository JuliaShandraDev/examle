import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThreeComponent} from "./children/three/three.component";
import {FourComponent} from "./children/four/four.component";
import {ExampleOneRoutingModule} from "./example-one-routing.module";
import {ExampleOneComponent} from "./component/example-one.component";


@NgModule({
  declarations: [ThreeComponent, FourComponent, ExampleOneComponent],
  exports: [ThreeComponent, FourComponent, ExampleOneComponent],
  imports: [
    ExampleOneRoutingModule,
    CommonModule
  ]
})
export class ExampleOneModule { }
