import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "src/app/model/recipe";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipies.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    console.log("recipe detail");
    this.route.params.subscribe(params => {
      this.index = params["id"];
      this.recipe = this.recipeService.getRecipeByIndex(this.index);
    });
  }
}
