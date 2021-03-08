import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

/* To Create reusable Gaurd */

export interface CanComponentLeave{
  canLeave: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class DeActiveGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component: CanComponentLeave){
    if(component.canLeave){
       return component.canLeave();
    }
    return true;
    
  }
  
}
