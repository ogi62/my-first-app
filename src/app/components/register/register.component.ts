import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private customValidator: CustomvalidationService,
              ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, this.customValidator.patternValidator()]),
      confirmPassword: new FormControl('', Validators.required)
    },
    { validator: this.customValidator.passwordsMathcValidator() }
    )
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

}
