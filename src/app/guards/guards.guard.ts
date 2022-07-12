import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

   private isAuthorized(route: ActivatedRouteSnapshot) :boolean  {
    const roles = ['Admin', 'ogi@gmail.com'];
    const expectedRoles = route.data['expectedRoles'];
    const rolesMatches = roles.findIndex( role => expectedRoles.indexOf(role) !== -1);

    return rolesMatches < 0 ? false : true;
  }
  
}
