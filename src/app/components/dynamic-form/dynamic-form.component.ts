import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonFormData,JsonFormControls } from 'src/app/models/JsonFormControls';
import DynamicForm from "../../../assets/dynamic-form.json";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  public myForm!: FormGroup;
  simpleForm = DynamicForm.controls;

  constructor(private fb: FormBuilder) {
    console.log(this.simpleForm);
    this.myForm = this.fb.group({});
    this.createControls(this.simpleForm);
  }

  ngOnInit(): void {
  }

  

  createControls(controls: JsonFormControls[]) {
    for (let control of controls) {
      const newFormControl = new FormControl();

      if(control.validators.required) {
        newFormControl.setValidators(Validators.required);
      }

      if(control.validators.minLength) {
        newFormControl.setValidators(Validators.minLength(control.validators.minLength));
      }

      this.myForm.addControl(control.name, newFormControl)
      }
      
    }
  
  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }
}

