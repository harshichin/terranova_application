import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master/master.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-material-dialog',
  templateUrl: './add-material-dialog.component.html',
  styleUrls: ['./add-material-dialog.component.css'],
})
export class AddMaterialDialogComponent implements OnInit {
  materialForm!: FormGroup;
  constructor(
    private masterService: MasterService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddMaterialDialogComponent>
  ) {}

  ngOnInit(): void {
    this.materialForm = new FormGroup({
      materialName: new FormControl('', Validators.required),
      materialCode: new FormControl('', Validators.required),
    });
    console.log(this.editData);

    if (this.editData) {
      let items = this.editData;
      // this.adminForm.controls['name'].setValue(this.editData.name);
      this.materialForm.setValue({
        materialName: items.materialName,
        materialCode: items.materialCode,
      });
    }
  }

  onSubmit() {
    if (this.editData) {
      this.masterService
        .editMaterial(this.editData._id, this.materialForm.value)
        .subscribe((res) => {
          this.dialogRef.close('updated');
        });
    } else {
      this.masterService
        .addMaterial(this.materialForm.value)
        .subscribe((res) => {
          this.dialogRef.close('Added');
        });
    }
  }
}
