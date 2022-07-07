import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;


  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // });

  constructor(private router: Router, 
              private fb: FormBuilder,
              private toast: NgToastService,
              ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.toast.success({
        detail: 'Log In',
        summary: 'You are successfully logged in',
        duration: 5000,
      });
    }

    if(!this.loginForm.valid) {
      this.toast.error({
        detail: 'Login Failed',
        summary: 'Something went wrong !',
        duration: 5000,
      });
    }

  }

}
