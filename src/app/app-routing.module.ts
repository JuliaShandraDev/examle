import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'example-one',
    loadChildren: () => import('src/app/example-one/example-one.module').then(m => m.ExampleOneModule)
  },
  {
    path: 'example-two',
    loadChildren: () => import('src/app/example-two/example-two.module').then(m => m.ExampleTwoModule)
  },
  {
    path: 'example-three',
    loadChildren: () => import('src/app/example-three/example-three.module').then(m => m.ExampleThreeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
