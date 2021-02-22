import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    component: LoginComponentComponent
  },
  // {
  //   path: "register",
  //   pathMatch: "full",
  //   component: RegisterComponentComponent
  // }
]
@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
