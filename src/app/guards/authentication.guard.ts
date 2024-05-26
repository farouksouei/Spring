import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {

  constructor(private router: Router,
              private authService: AuthService,) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated) {
      return true
    } else {
      this.router.navigateByUrl("/")
      return false;
    }
  }
}
