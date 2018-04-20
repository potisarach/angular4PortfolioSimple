import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard{
  constructor(private route: Router){

  }
  canActivate() {

    if(localStorage.getItem('isLoggedin')){
      return true;
    }
    this.route.navigate(['/login']);
    return false;
   
  }
}
