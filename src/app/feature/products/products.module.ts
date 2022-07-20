import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FilterPipe } from '../../shared/pipes/filterPipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { OrdersComponent } from '../products/orders/orders.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    FilterPipe,
    ModalComponent,
    DynamicFormComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
