import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  constructor(private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

   private isAuthorized(route: ActivatedRouteSnapshot) :boolean  {
    const role = (localStorage.getItem("user"));
    const admin = "aTSJ4rkFH7Xzq8b7VMseuhImRh42";

    if( admin === role) {
      return true;
    }
    this.route.navigate(['/products']);

    return false;

  }
  
}
