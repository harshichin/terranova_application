import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/service/service.service';
import { AddUserComponent } from '../dialog/add-user/add-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = [
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
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.getAllUsers()
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllUsers()
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

  getAllUsers(){
    this.service.getAllUsers().subscribe(res => {
      this.dataSource.data = res.response
    })
  }
  deleteAdmin(id){
    // this.service.deleteAdmin(id).subscribe(res => {
    //   this.dataSource.data = res.response
    // })
  }
}
