import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    FilterPipe,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule
  ],

})
export class ProductsModule { }
