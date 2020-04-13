import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "src/app/model/recipe";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  mydate: Date;

  constructor() {}

  ngOnInit() {
    this.mydate = new Date();
  }
}
