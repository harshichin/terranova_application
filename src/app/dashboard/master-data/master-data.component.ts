import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/service/master/master.service';
import { ServiceService } from 'src/app/service/service.service';
import { AddLocationDialogComponent } from '../dialog/add-location-dialog/add-location-dialog.component';
import { AddMaterialDialogComponent } from '../dialog/add-material-dialog/add-material-dialog.component';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css'],
})
export class MasterDataComponent implements OnInit {
  locationDisplayedColumns: string[] = [
    'Company_Name',
    'Location',
    'Full_Address',
    'Actions',
  ];
  locationTableData = new MatTableDataSource([]);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  locationSort!: MatSort;

  materialDisplayedColumns: string[] = [
    'Material_Name',
    'Material_Code',
    'Actions',
  ];
  materialTableData = new MatTableDataSource([]);
  @ViewChild(MatPaginator)
  paginator1!: MatPaginator;
  @ViewChild(MatSort)
  materialSort!: MatSort;

  constructor(
    private masterService: MasterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllLocationData();
    this.getAllMaterialData();
  }

  ngAfterViewInit() {
    this.locationTableData.paginator = this.paginator;
    this.locationTableData.sort = this.locationSort;

    this.materialTableData.paginator = this.paginator1;
    this.materialTableData.sort = this.materialSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.locationTableData.filter = filterValue.trim().toLowerCase();
    if (this.locationTableData.paginator) {
      this.locationTableData.paginator.firstPage();
    }

    const materialFilterValue = (event.target as HTMLInputElement).value;
    this.materialTableData.filter = materialFilterValue.trim().toLowerCase();
    if (this.materialTableData.paginator) {
      this.materialTableData.paginator.firstPage();
    }
  }

  getAllLocationData() {
    this.masterService.getAllLocationData().subscribe((res) => {
      this.locationTableData.data = res.response;
    });
  }

  openLocationDialog(data) {
    const dialogRef = this.dialog.open(AddLocationDialogComponent, {
      width: '550px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllLocationData();
    });
  }

  deleteLocation(id: any) {
    this.masterService.deleteLocation(id).subscribe((res) => {
      if (!res.error) {
        this.getAllLocationData();
      }
    });
  }

  // ------------------------------Material Data------------------------------
  getAllMaterialData() {
    this.masterService.getAllMaterialData().subscribe((res) => {
      this.materialTableData.data = res.response;
    });
  }

  openMaterialDialog(data) {
    const dialogRef = this.dialog.open(AddMaterialDialogComponent, {
      width: '550px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAllMaterialData();
    });
  }

  deleteMaterial(id: any) {
    this.masterService.deleteMaterial(id).subscribe((res) => {
      if (!res.error) {
        this.getAllMaterialData();
      }
    });
  }
}
