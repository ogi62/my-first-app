import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';
import { ProductsService } from 'src/app/shared/services/productsService/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit,OnDestroy {
  products: Product[] | any;
  private unSubscribe$ = new Subject();

  constructor(
    private productService: ProductsService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts()
    .pipe(takeUntil(this.unSubscribe$))
    .subscribe((data) => {
      this.products = data.map((p) => {
        const product = p.payload.doc.data();

        // znam da ga dohvatim ne znam da ga promenim
        // console.log(p.payload.doc.id);
        return { ...(product as Object), id: p.payload.doc.id };
      });
    });
  }

  editProduct(item: Product) {
    this.router.navigate(['/admin/product/', item.id], {
      state: { data: { item } },
    });
  }

  deleteProduct(id: any) {
    this.toast.error({
      detail: 'Product Deleted',
      summary: 'You successfully deleted the product',
      duration: 5000,
    });
    this.productService.deleteProduct(id);
  }

  trackProduct(index: number, product: Product) {
    return product.id;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }
}
