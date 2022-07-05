import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[] | any;

  constructor( private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
        this.products = data.map(p => {
          // znam da ga dohvatim ne znam da ga promenim
          console.log(p.payload.doc.id)
          return p.payload.doc.data()
        })
    })
  }

  editProduct(item:Product) {
    this.router.navigate(['/admin/product/',item.id],{state: {data: {item}}});
  }

}
