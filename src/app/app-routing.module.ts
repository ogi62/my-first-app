import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './feature/admin/edit-product/edit-product.component';
import { LoginComponent } from './shared/shell/login/login.component';
import { ProductComponent } from './feature/admin/product/product.component';
import { RegisterComponent } from './shared/shell/register/register.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { DynamicFormComponent } from './feature/products/dynamic-form/dynamic-form.component';
import { OrdersComponent } from './feature/products/orders/orders.component';
import { GuardsGuard } from './core/guards/AdminGuard/admin.guard';
import { UserGuard } from './core/guards/UserGuard/user.guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const redirectToProduct = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToProduct)
  },
  {
    path: 'register',
    component: RegisterComponent,
    ...canActivate(redirectToProduct)
  },
  {
    path: '',
    loadChildren: ()=> 
    import('./feature/products/products.module').then((m)=> m.ProductsModule),
    ...canActivate(redirectToLogin)
  },
  {
       path: 'admin',
       loadChildren: () =>
         import('./feature/admin/admin.module').then((m) => m.AdminModule),
         canActivate:[GuardsGuard]
   },
   {
    path: '**',
    component: LoginComponent,
    ...canActivate(redirectToProduct)
   }
  // { path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
  // { path: 'login',
  // component: LoginComponent,
  // ...canActivate(redirectToProduct)
  // },
  // { path: 'register',
  // component: RegisterComponent,
  // ...canActivate(redirectToProduct)
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./feature/admin/admin.module').then((m) => m.AdminModule),
  //     canActivate:[GuardsGuard]
  // },
  // {
  //   path: 'admin/products',
  //   loadChildren: () =>
  //     import('./feature/admin/admin.module').then((m) => m.AdminModule),
  //     canActivate:[GuardsGuard]
  //   },
  // {
  //   path: 'admin/product',
  //   component: ProductComponent,
  // },
  // {
  //   path: 'admin/product/:id',
  //   component: EditProductComponent,
  //   ...canActivate(redirectToLogin)
  // },
  // {
  //   path: 'products',
  //   loadChildren: () =>
  //     import('./feature/products/products.module').then((m) => m.ProductsModule),
  //     ...canActivate(redirectToLogin),
  // },
  // {
  //   path: 'products/list',
  //   loadChildren: () =>
  //     import('./feature/products/products.module').then((m) => m.ProductsModule),
  //     ...canActivate(redirectToLogin),
  // },
  // {
  //   path: 'order-now',
  //   component: DynamicFormComponent,
  //   canActivate:[UserGuard]
  // },
  // {
  //   path: 'app-orders',
  //   component: OrdersComponent,
  //   ...canActivate(redirectToLogin),
  // },
  // {
  //   path: '**',
  //   component: LoginComponent,
  //   ...canActivate(redirectToProduct)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
