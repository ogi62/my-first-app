import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonFormData,JsonFormControls } from 'src/app/models/JsonFormControls';
import DynamicForm from "../../../assets/dynamic-form.json";
import { Order } from "../../models/Order";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  public myForm!: FormGroup;
  simpleForm = DynamicForm.controls;
  order!: Order;

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

    this.order = {
      id: Math.floor(Math.random() * 1000000 + 1),
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      address: this.myForm.value.address,
      productBrand: this.myForm.value.productBrand,
      productName: this.myForm.value.productName,
      productSize: this.myForm.value.productSize,
      productColor: this.myForm.value.productColor,
      productDescription: this.myForm.value.productDescription,
     };

     console.log(this.order)

  }
}

