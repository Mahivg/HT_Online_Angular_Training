export class Ingredient {
  name: string;
  quantity: number;

  constructor(public iName: string, public iQuantity: number) {
    this.name = iName;
    this.quantity = iQuantity;
  }
}
