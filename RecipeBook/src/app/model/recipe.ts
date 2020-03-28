import { Ingredient } from "./ingredient";

export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(
    public rName: string,
    public rDescription: string,
    public rImagePath: string,
    public rIngredients: Ingredient[]
  ) {
    this.name = rName;
    this.description = rDescription;
    this.imagePath = rImagePath;
    this.ingredients = rIngredients;
  }
}
