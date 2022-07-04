import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: Product;
  productTitle!: string;
  productDescription!: string;
  productImage!: string;
  productPrice!: string;
  productQuantity!: string;

  constructor(public fireservice: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.product  ={
      id: Math.floor((Math.random() * 1000000) + 1),
      title: this.productTitle,
      price: +this.productPrice,
      description: this.productDescription,
      quantity: +this.productQuantity,
      image: this.productImage
      
    };

    this.fireservice.addProduct(this.product).then(res => {

        this.productTitle = "";
        this.productDescription = '';
        this.productImage = "";
        this.productPrice = "";
        this.productQuantity = "";
        this.router.navigate(["/admin/products"]);
    }).catch(error => {
      console.log(error);
    });
    
  }

}
