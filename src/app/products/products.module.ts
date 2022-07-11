import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    FilterPipe,
    ModalComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

})
export class ProductsModule { }
