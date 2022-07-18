import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUser(route);
  }

  private isUser(route: ActivatedRouteSnapshot): boolean {
    const role = localStorage.getItem('user');
    const admin = "aTSJ4rkFH7Xzq8b7VMseuhImRh42";

    if( admin === role ) {

      return false;
    }

    return true;

  }
  
}
