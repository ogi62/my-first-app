import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private authService: AuthenticationService,
    private toast: NgToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        firstName: new FormControl<string>('', Validators.required),
        lastName: new FormControl<string>('', Validators.required),
        email: new FormControl<string>('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl<string>('', [
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
        confirmPassword: new FormControl<string>('', Validators.required),
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
    if (!this.signupForm.valid) {
      this.toast.error({
        detail: 'Sign In Failed',
        summary: 'Something went wrong try again!',
        duration: 5000,
      });

      return;
    }
    this.submitted = true;
    const { firstName, email, password } = this.signupForm.value;
    this.authService.signUp(email, password).subscribe(() => {
      this.router.navigate(['/products']);
    });

    this.toast.success({
      detail: 'Sign In',
      summary: 'You successfully created profile',
      duration: 5000,
    });
  }
}
