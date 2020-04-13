import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  shoppingEditFG: FormGroup;

  forbiddedNames = ["apple", "grape"];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.shoppingEditFG = this.fb.group({
      name: new FormControl("", [
        Validators.required,
        this.checkForbiddenName.bind(this)
      ]),
      quantity: new FormControl(null, [Validators.required, Validators.max(10)])
    });
  }

  onIngredientAdded() {
    console.log(this.shoppingEditFG);
  }

  checkForbiddenName(control: AbstractControl): { key: string; err: string } {
    if (this.forbiddedNames.indexOf(control.value) >= 0) {
      return {
        key: "forbiddenName",
        err: "InvalidNameExits"
      };
    }
  }
}
