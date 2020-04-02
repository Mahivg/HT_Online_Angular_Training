import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { ProductGaurd } from "./products/products-gaurd.service";
import { ProductExitGaurd } from "./products/products-exit-gaurd.service";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "products",
    component: ProductsComponent,
    children: [
      {
        path: ":id/details",
        component: ProductComponent,
        canDeactivate: [ProductExitGaurd]
      },
      { path: ":id/edit", component: ProductEditComponent }
    ],
    canDeactivate: [ProductExitGaurd],
    canActivateChild: [ProductGaurd]
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "something",
    component: NotFoundComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
