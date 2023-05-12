import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { CreateLoadComponent } from './create-load/create-load.component';
import { DashboardComponent } from './dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user-management',
        component: UserManagementComponent,
      },
      {
        path: 'client-management',
        component: ClientManagementComponent,
      },
      {
        path: 'create-load',
        component: CreateLoadComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
