import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master/master.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-location-dialog',
  templateUrl: './add-location-dialog.component.html',
  styleUrls: ['./add-location-dialog.component.css'],
})
export class AddLocationDialogComponent implements OnInit {
  locationForm!: FormGroup;
  constructor(
    private masterService: MasterService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddLocationDialogComponent>
  ) {}

  ngOnInit(): void {
    this.locationForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      fullAddress: new FormControl('', Validators.required),
    });
    console.log(this.editData);

    if (this.editData) {
      let items = this.editData;
      this.locationForm.setValue({
        companyName: items.companyName,
        location: items.location,
        fullAddress: items.fullAddress,
      });
    }
  }

  onSubmit() {
    if (this.editData) {
      this.masterService
        .editLocation(this.editData._id, this.locationForm.value)
        .subscribe((res) => {
          this.dialogRef.close('updated');
        });
    } else {
      this.masterService
        .addLocation(this.locationForm.value)
        .subscribe((res) => {
          this.dialogRef.close('Added');
        });
    }
  }
}
