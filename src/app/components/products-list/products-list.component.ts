import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  search!: string;
  bodyTitle!: string;
  bodyImage!:string;
  bodyPrice!: number;
  bodyDescription!: string;


  constructor(private dataService: DataService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.products = this.dataService.getProducts();
    this.bodyTitle = 'This text can be updated in modal 1';

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
