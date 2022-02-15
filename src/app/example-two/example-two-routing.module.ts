import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FiveComponent} from "./children/five/five.component";
import {SixComponent} from "./children/six/six.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'five',
    pathMatch: 'full'
  },
  {
    path: 'five',
    component: FiveComponent
  },
  {
    path: 'six',
    component: SixComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleTwoRoutingModule {
}
