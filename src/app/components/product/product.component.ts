import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    public fireservice: ProductsService,
    private router: Router,
    private toast: NgToastService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productTitle: new FormControl<string>('', Validators.required),
      productImage: new FormControl<string>('', Validators.required),
      productDescription: new FormControl<string>(''),
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
    const { title, price, description, quantity, image } = this.productForm.value;
    this.product = {
     id: Math.floor(Math.random() * 1000000 + 1),
     title: title,
      price: price,
      description: description,
      quantity: quantity,
      image: image,
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
