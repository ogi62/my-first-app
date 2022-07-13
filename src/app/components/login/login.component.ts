import { Component, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService,
    private customValidator: CustomvalidationService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
      ],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    try {
      this.submitted = true;
      const { email, password } = this.loginForm.value;
      // previous version with login()Observable
      // this.auth.login(email, password).subscribe(() => {
      //   this.router.navigate(['/products']);
      //   this.toast.success({
      //     detail: 'Log In',
      //     summary: 'You are successfully logged in',
      //     duration: 5000,
      //   });
      // });
      this.auth.login(email, password).then(() => {
        this.toast.success({
          detail: 'Log in',
          summary: 'You are successfully logged in',
          duration: 5000,
        });
        this.router.navigate(['/products']);
      });

      if (!this.loginForm.valid) {
        this.toast.error({
          detail: 'Login Failed',
          summary: 'Something went wrong !',
          duration: 5000,
        });
        return;
      }
    } catch (error) {
      // this.toast.error({
      //   detail: "Ovo je error",
      //   summary: 'You are successfully logged in',
      //   duration: 5000,
      // });
      console.log(error);
    }
  }
}
