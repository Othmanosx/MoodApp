import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () =>import("../libs/modules/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: 'register',
    loadChildren: () =>import("../libs/modules/register/register.module").then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () =>import("../libs/modules/login/login.module").then(m=>m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
