import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateCallback } from '@firebase/util';
import { NgToastService } from 'ng-angular-popup';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product;
  productForm!: FormGroup;
  submitted = false;

  constructor(
    public fireservice: ProductsService,
    private router: Router,
    private toast: NgToastService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productTitle: new FormControl<string>('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      productImage: new FormControl<string>('', Validators.required),
      productDescription: new FormControl<string>('', [ Validators.minLength(10), Validators.maxLength(150)]),
      productPrice: new FormControl(null, Validators.required),
      productQuantity: new FormControl(null, Validators.required)
    })
  }

  get productTitle() {
    return this.productForm.get('productTitle');
  }

  get productImage() {
    return this.productForm.get('productImage');
  }

  get productDescription() {
    return this.productForm.get('productDescription');
  }

  get productPrice() {
    return this.productForm.get('productPrice');
  }

  get productQuantity() {
    return this.productForm.get('productQuantity');
  }

  addProduct() {
    this.submitted = true;

    this.product = {
     id: Math.floor(Math.random() * 1000000 + 1),
     title: this.productForm.value.productTitle,
      price: this.productForm.value.productPrice,
      description: this.productForm.value.productDescription,
      quantity: this.productForm.value.productQuantity,
      image: this.productForm.value.productImage,
    };

    this.fireservice
      .addProduct(this.product)
      .then((res) => {
       
        this.router.navigate(['/admin/products']);
        this.toast.success({
          detail: 'Product Added',
          summary: 'You successfully added a new product !',
          duration: 5000,
        });
      })
      .catch((error) => {
        this.toast.error({
          detail: "Product isn't added",
          summary: error.message,
          duration: 5000,
        });
      });
  }
}
