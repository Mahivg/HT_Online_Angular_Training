import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../model/ingredient";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Bread", 5),
    new Ingredient("Banana", 3)
  ];

  constructor() {}

  ngOnInit() {}
}
