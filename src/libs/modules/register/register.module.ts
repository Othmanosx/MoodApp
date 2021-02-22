import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    component: RegisterComponentComponent
  },
  // {
  //   path: "register",
  //   pathMatch: "full",
  //   component: RegisterComponentComponent
  // }
]

@NgModule({
  declarations: [RegisterComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RegisterModule { }
