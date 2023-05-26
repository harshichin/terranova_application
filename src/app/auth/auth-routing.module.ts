import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLoginComponent } from './client-login/client-login.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'client-login',component:ClientLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
