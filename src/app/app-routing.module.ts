import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GuardsGuard } from './guards/guards.guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const redirectToProduct = () => redirectLoggedInTo(['products']);

const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login',
  component: LoginComponent,
  ...canActivate(redirectToProduct)
  },
  { path: 'register',
  component: RegisterComponent,
  ...canActivate(redirectToProduct)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate:[GuardsGuard]
  },
  {
    path: 'admin/products',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate:[GuardsGuard]
    },
  {
    path: 'admin/product',
    component: ProductComponent,
  },
  {
    path: 'admin/product/:id',
    component: EditProductComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
      ...canActivate(redirectToLogin),
  },
  {
    path: 'products/list',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
      ...canActivate(redirectToLogin),
  },
  {
    path: 'order-now',
    component: DynamicFormComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: 'app-orders',
    component: OrdersComponent,
    ...canActivate(redirectToLogin),
  },
  {
    path: '**',
    component: LoginComponent,
    ...canActivate(redirectToProduct)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
