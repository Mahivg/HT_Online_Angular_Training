import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

// Lay Loading

const routes: Routes = [
  {
    path: "recipes",
    loadChildren: "./recipes/recipes.module#RecipeModule"
    // loadChildren: () => import("./recipes/recipes.module").then(module => module.RecipeModule)
  },
  {
    path: "shopping",
    component: ShoppingListComponent
  },

  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
