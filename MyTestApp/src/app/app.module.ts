import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { ProductTextColor } from "./products/product-text-color.directives";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { TestComponent } from "./test/test.component";
import { MyDirective } from "./shared/my-directive.directive";
import { MyStructuralDirective } from "./shared/my-structural.directive";
import { TextHighlightDirective } from "./shared/custom-directive/text-highlight.directive";
import { MyLoopDirective } from "./shared/custom-directive/my-loop.directive";
import { LoggingService } from "./shared/service/logging.service";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: ":id/details", component: ProductComponent },
      { path: ":id/edit", component: ProductEditComponent }
    ]
  },
  {
    path: "",
    redirectTo: "products",
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
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductTextColor,
    ProductEditComponent,
    TestComponent,
    TextHighlightDirective,
    MyLoopDirective,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
