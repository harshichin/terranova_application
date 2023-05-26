import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  adminForm!: FormGroup;
  constructor(
    private service: ServiceService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddClientComponent>
  ) {}

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      name: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    if (this.editData) {
      let items = this.editData;
      // this.adminForm.controls['name'].setValue(this.editData.name);
      this.adminForm.setValue({
        name: items.name,
        emailId: items.emailId,
        phoneNo: items.phoneNo,
        password: items.password,
      });
    }
  }

  onSubmit() {
    // if (this.editData) {
    //   this.service
    //     .update(this.editData._id, this.adminForm.value)
    //     .subscribe((res) => {
    //       this.dialogRef.close('updated');
    //     });
    // } else {
    //   this.service.addAdmin(this.adminForm.value).subscribe((res) => {
    //     this.dialogRef.close('Added');
    //   });
    // }

    console.log(this.adminForm.value);
  }
}
