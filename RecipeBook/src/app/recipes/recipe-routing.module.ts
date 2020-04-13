import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipeRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      {
        path: ":id/details",
        component: RecipeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
