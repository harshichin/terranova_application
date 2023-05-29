import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddClientComponent>
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    console.log(this.editData);

    if (this.editData) {
      let items = this.editData;
      // this.adminForm.controls['name'].setValue(this.editData.name);
      this.userForm.setValue({
        name: items.name,
        emailId: items.emailId,
        phoneNo: items.phoneNo,
        password: items.password,
      });
    }
  }

  onSubmit() {
    if (this.editData) {
      this.userService
        .editUser(this.editData._id, this.userForm.value)
        .subscribe((res) => {
          this.dialogRef.close('updated');
        });
    } else {
      this.userService.addUser(this.userForm.value).subscribe((res) => {
        this.dialogRef.close('Added');
      });
    }

    console.log(this.userForm.value);
  }
}
