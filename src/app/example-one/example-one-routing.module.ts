import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ThreeComponent} from "./children/three/three.component";
import {FourComponent} from "./children/four/four.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'three',
    pathMatch: 'full'
  },
  {
    path: 'three',
    component: ThreeComponent
  },
  {
    path: 'four',
    component: FourComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleOneRoutingModule {
}
