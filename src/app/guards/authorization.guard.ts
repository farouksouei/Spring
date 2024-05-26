import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationGuard {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated) {
      let requiredRole = "ADMIN";
      if (this.authService.roles.includes(requiredRole)) {
        return true;
      } else {
        // Redirect user to unauthorized page or do something else
        this.router.navigateByUrl("/unauthorized");
        return false;
      }
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
