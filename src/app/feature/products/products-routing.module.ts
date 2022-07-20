import { NgModule } from '@angular/core';
import { canActivate } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/core/guards/UserGuard/user.guard';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'order-now',
    component: DynamicFormComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'app-orders',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
