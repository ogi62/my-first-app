import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
  }

}
