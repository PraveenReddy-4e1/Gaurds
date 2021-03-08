import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router' ;



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route : Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('user') != null){
        return true;
      }else{
        this.route.navigate(['']);
        return false
      }

  }

  canActivateChild(){
   /* Your logic here Depends on requirements */
   
    return true

  }
  
}
