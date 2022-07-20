import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from '../admin/edit-product/edit-product.component';
import { AdminComponent } from '../../feature/admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    AllProductsComponent,
    ProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
