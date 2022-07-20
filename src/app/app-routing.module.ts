import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/shell/login/login.component';
import { RegisterComponent } from './shared/shell/register/register.component';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { GuardsGuard } from './core/guards/AdminGuard/admin.guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const redirectToProduct = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToProduct),
  },
  {
    path: 'register',
    component: RegisterComponent,
    ...canActivate(redirectToProduct),
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature/products/products.module').then(
        (m) => m.ProductsModule
      ),
    ...canActivate(redirectToLogin),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./feature/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [GuardsGuard],
  },
  {
    path: '**',
    component: LoginComponent,
    ...canActivate(redirectToProduct),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
