import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./../../model/recipe";
import { RecipeService } from "../recipies.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  testString: number;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
  }

  recipeWasSelected(recipeIndex: number) {
    this.recipeService.recipeItemSelected.emit(recipeIndex);
  }
}
