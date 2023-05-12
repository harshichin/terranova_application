import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './dialog/add-user/add-user.component';
import { AddClientComponent } from './dialog/add-client/add-client.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { CreateLoadComponent } from './create-load/create-load.component';


@NgModule({
  declarations: [SidenavComponent, HeaderComponent, DashboardComponent, UserManagementComponent, AddUserComponent, AddClientComponent, ClientManagementComponent, CreateLoadComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
