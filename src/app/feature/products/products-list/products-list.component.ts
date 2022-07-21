import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { DataService } from 'src/app/feature/products/products-list/products-listService/data.service';
import { ModalService } from 'src/app/feature/products/modal/modalService/modal.service';
import { ProductsService } from 'src/app/shared/services/productsService/products.service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit,OnDestroy {
  products!: any;
  search!: string;
  bodyTitle!: string;
  bodyImage!:string;
  bodyPrice!: number;
  bodyDescription!: string;

  private unSubscribe = new Subject();


  // constructor(private dataService: DataService, private modalService: ModalService) {}
  constructor(private productService: ProductsService, private modalService: ModalService) {}


  ngOnInit(): void {
    this.productService.getProducts()
    .pipe(takeUntil(this.unSubscribe))
    .subscribe(data => {

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

ngOnDestroy(): void {
  this.unSubscribe.unsubscribe();
}

}
