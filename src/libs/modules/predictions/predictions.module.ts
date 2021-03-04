import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponentComponent } from './result-component/result-component.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    pathMatch:'full',
    component:ResultComponentComponent
  },

];

@NgModule({
  declarations: [ResultComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]

})
export class PredictionsModule { }
