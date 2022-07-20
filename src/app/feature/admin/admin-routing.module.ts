import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent,
    children: [
      { path: 'products', component: AllProductsComponent},
      { path: 'product', component: ProductComponent},
      { path: 'product/:id', component: EditProductComponent}
    ] 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
