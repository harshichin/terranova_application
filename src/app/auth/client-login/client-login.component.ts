import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css'],
})
export class ClientLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  show = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/),
        // Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern(
        //   '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$'
        // ),
      ]),
    });
  }
  hide = true;
  get passwordInput() {
    return this.loginForm.get('password');
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

  loginFormSubmit1() {
    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        if (!res.error) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard/users']);
        } else {
        }
      },
      (err) => {
        if (err.status) {
        } else {
        }
      }
    );
  }
  forgotPassword() {
    this.router.navigate(['/email']);
  }

  loginFormSubmit() {
    this.router.navigate(['/dashboard/users']);
  }
}
