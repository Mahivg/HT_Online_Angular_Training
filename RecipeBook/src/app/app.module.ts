import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeModule } from "./recipes/recipes.module";
import { ShoppingModule } from "./shopping-list/shopping.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RecipeModule, ShoppingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
