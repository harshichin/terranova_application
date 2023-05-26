import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { CreateLoadComponent } from './create-load/create-load.component';
import { DashboardComponent } from './dashboard.component';
import { MasterDataComponent } from './master-data/master-data.component';
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
        path: 'users',
        component: UserManagementComponent,
      },
      {
        path: 'clients',
        component: ClientManagementComponent,
      },
      {
        path: 'client/:id',
        component: ClientDetailsComponent,
      },
      {
        path: 'create-load',
        component: CreateLoadComponent,
      },
      {
        path: 'master-data',
        component: MasterDataComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
