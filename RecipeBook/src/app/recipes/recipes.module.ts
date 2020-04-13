import { NgModule } from "@angular/core";
import { RecipesComponent } from "./recipes.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes-list/recipe-item/recipe-item.component";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { CustomUpperCase } from "./recipes-list/recipe-item/CustomUpperCase.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    CustomUpperCase
  ],
  imports: [CommonModule, RecipeRoutingModule, FormsModule, ReactiveFormsModule]
})
export class RecipeModule {}
