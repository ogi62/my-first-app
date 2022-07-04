import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[] | any;

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
        this.products = data.map(p => {
          return p.payload.doc.data()
        })
    })
  }

}
