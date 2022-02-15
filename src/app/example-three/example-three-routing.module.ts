import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WeatherComponent} from "./children/weather/weather.component";
import {FormViewComponent} from "./children/form-view/form-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'form-view',
    component: FormViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleThreeRoutingModule {
}
