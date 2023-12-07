import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardSampleComponent } from './components/card-sample/card-sample.component';
import { CardFormComponent } from './components/card-form/card-form.component';

const routes: Routes = [
  {
    path:'card',
    component:CardSampleComponent
  },
  {
    path:'form',
    component:CardFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
