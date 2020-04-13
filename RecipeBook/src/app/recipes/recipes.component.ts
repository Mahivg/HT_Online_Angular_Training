import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../model/recipe";
import { RecipeService } from "./recipies.service";
import { ThrowStmt } from "@angular/compiler";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;

  recipeItemSelectedSubscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeItemSelectedSubscription = this.recipeService.recipeItemSelected.subscribe(
      index => {
        this.selectedRecipe = this.recipeService.getRecipeByIndex(index);
      }
    );
  }

  ngOnDestroy() {
    this.recipeItemSelectedSubscription.unsubscribe();
  }
}
