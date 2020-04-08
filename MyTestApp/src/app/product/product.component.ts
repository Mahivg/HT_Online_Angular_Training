import { Component, OnInit } from "@angular/core";
import { IProductExitGaurd } from "../products/products-exit-gaurd.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit, IProductExitGaurd {
  constructor(private fb: FormBuilder) {}

  myFormGroup: FormGroup;

  ngOnInit() {
    this.myFormGroup = this.fb.group({
      name: new FormControl("test", [
        Validators.required,
        Validators.minLength(5)
      ]),
      description: new FormControl(null),
      email: new FormControl(null, Validators.email),
      address: new FormGroup({
        addd1: new FormControl(null),
        add2: new FormControl(null)
      })
    });
  }

  get f() {
    return this.myFormGroup.controls;
  }

  onFormSubmit() {
    console.log(this.myFormGroup);
  }

  onRouteExit() {}
}
