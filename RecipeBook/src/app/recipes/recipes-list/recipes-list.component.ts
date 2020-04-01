import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./../../model/recipe";
import { RecipeService } from "../recipies.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  testString: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipies();
  }

  recipeWasSelected(recipeIndex: number) {
    console.log(recipeIndex);
    this.router.navigate([recipeIndex, "details"], { relativeTo: this.route });
    // this.recipeService.recipeItemSelected.emit(recipeIndex);
  }
}
