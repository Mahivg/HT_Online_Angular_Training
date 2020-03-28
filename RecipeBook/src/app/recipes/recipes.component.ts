import { Component, OnInit } from "@angular/core";
import { Recipe } from "../model/recipe";
import { RecipeService } from "./recipies.service";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeItemSelected.subscribe(index => {
      this.selectedRecipe = this.recipeService.getRecipeByIndex(index);
    });
  }
}
