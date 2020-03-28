import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../model/recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      "Test 1",
      "Sample Description",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg",
      []
    ),
    new Recipe(
      "Test 2",
      "Sample Description",
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg",
      []
    )
  ];

  recipeItemSelected = new EventEmitter<number>();

  getRecipies(): Recipe[] {
    return this.recipes;
  }

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index];
  }

  getAnyObject(): string | number {
    return null;
  }
}
