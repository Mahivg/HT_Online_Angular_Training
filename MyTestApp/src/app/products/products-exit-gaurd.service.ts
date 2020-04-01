import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ProductsComponent } from "./products.component";

export interface IProductExitGaurd {
  onRouteExit();
}

@Injectable()
export class ProductExitGaurd implements CanDeactivate<IProductExitGaurd> {
  canDeactivate(
    component: IProductExitGaurd,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    let confirm = window.confirm("Do you want to leave?");

    return confirm;
  }
}
