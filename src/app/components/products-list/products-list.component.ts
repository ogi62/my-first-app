import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: any;
  search!: string;
  bodyTitle!: string;
  bodyImage!:string;
  bodyPrice!: number;
  bodyDescription!: string;


  // constructor(private dataService: DataService, private modalService: ModalService) {}
  constructor(private productService: ProductsService, private modalService: ModalService) {}


  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {

      this.products = data.map(e => {
        return  e.payload.doc.data()
      })
      
    });

  }

  openModal(id: string, product: Product) {
    this.modalService.open(id);
    this.bodyTitle = product.title;
    this.bodyPrice = product.price;
    this.bodyImage = product.image;
    this.bodyDescription = product.description;
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
