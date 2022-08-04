import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authGuardServie: AuthguardService, private router: Router) {

  }
  canActivate(): boolean  {
    
    if (!this.authGuardServie.gettoken()) {

      this.router.navigateByUrl('/customers')
      
    }
    return this.authGuardServie.gettoken();
  }
  

}
