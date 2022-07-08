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
  submitted = false;

  constructor(private fb: FormBuilder,
              private customValidator: CustomvalidationService,
              ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: new FormControl<string>('',Validators.required),
      lastName: new FormControl<string>('',Validators.required),
      email: new FormControl<string>('', [Validators.required,Validators.email]),
      password: new FormControl<string>('', [Validators.required, this.customValidator.patternValidator()]),
      confirmPassword: new FormControl<string>('', Validators.required)
    },
    { validator: this.customValidator.passwordsMatchValidator() }
    );
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

  submit() {
    this.submitted = true
  }

}
