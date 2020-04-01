import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRoute,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  CanActivateChild
} from "@angular/router";
import { AuthService } from "../login/login.service";

@Injectable()
export class ProductGaurd implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) {
    return this.authService.getAuthentication();
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ) {
    return this.canActivate(route, routeState);
  }
}
