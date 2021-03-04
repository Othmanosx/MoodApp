import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import("../libs/modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'result',
    loadChildren: () =>import("../libs/modules/predictions/predictions.module").then(m => m.PredictionsModule)
  },
  // {
  //   path: 'register',
  //   loadChildren: () =>import("../libs/modules/register/register.module").then(m => m.RegisterModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () =>import("../libs/modules/login/login.module").then(m=>m.LoginModule)
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
