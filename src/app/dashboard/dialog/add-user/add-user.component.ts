import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  adminForm!: FormGroup;
  constructor(
    private service: ServiceService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddUserComponent>,
  ) {}

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      name: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      dashboardAccess: new FormControl(false, Validators.required),
      userAccess: new FormControl(false, Validators.required),
      orderAccess: new FormControl(false, Validators.required),
      contractorAccess: new FormControl(false, Validators.required),
      machineAccess: new FormControl(false, Validators.required),
      paymentAccess: new FormControl(false, Validators.required),
      biddingAccess: new FormControl(false, Validators.required),
      settingAccess: new FormControl(false, Validators.required),
      versionAccess: new FormControl(false, Validators.required),
      notificationAccess: new FormControl(false, Validators.required),
      userManagementAccess: new FormControl(false, Validators.required),
    });
    if (this.editData) {
      let items = this.editData;
      // this.adminForm.controls['name'].setValue(this.editData.name);
      this.adminForm.setValue({
        name: items.name,
        emailId: items.emailId,
        phoneNo: items.phoneNo,
        password: items.password,
        dashboardAccess: items.dashboardAccess,
        userAccess: items.userAccess,
        orderAccess: items.orderAccess,
        contractorAccess: items.contractorAccess,
        machineAccess: items.machineAccess,
        paymentAccess: items.paymentAccess,
        biddingAccess: items.biddingAccess,
        settingAccess: items.settingAccess,
        versionAccess: items.versionAccess,
        notificationAccess: items.notificationAccess,
        userManagementAccess: items.userManagementAccess,
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
