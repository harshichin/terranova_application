import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/service/client/client.service';
import { AddClientComponent } from '../dialog/add-client/add-client.component';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
  displayedColumns: string[] = [
    'ClientID',
    'Name',
    'MobileNumber',
    'EmailID',
    // 'Password',
    'actions',
  ];
  dataSource = new MatTableDataSource<Element>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getAllClients();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getAllAdmins()
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((res) => {
      this.dataSource.data = res.response;
    });
  }

  deleteClient(id: any) {
    this.clientService.deleteClient(id).subscribe((res) => {
      if (!res.error) {
        this.getAllClients();
      }
      this.dataSource.data = res.response;
    });
  }

  editClient(data: any) {
    const dialogRef = this.dialog.open(AddClientComponent, {
      width: '800px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.getAllAdmins()
    });
  }
}
