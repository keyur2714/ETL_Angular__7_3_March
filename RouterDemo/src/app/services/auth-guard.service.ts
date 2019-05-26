import { AuthenticationService } from './authentication.service';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{    
    
    constructor(private router : Router,private authenticationService : AuthenticationService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        console.log(route.url);
        console.log(state.url);

        if(this.authenticationService.getIsLoggedIn()){
            return true;
        }
        this.authenticationService.successUrl = state.url;
        this.router.navigate(['/signin']);
        return false;
    }
    
}