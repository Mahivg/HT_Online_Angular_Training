import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";
import { ProductsService } from "../products/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProductEditComponent implements OnInit {
  newProductName: string;
  newProductDesc: string;

  @Output("productAdded") onProductAdd = new EventEmitter<{
    name: string;
    description: string;
  }>();

  name: string = "Hope";

  desc: string = "test";

  @ViewChild("txtName", { static: true }) txtName: any;
  @ViewChild("txtDesc", { static: true }) txtDesc: any;

  @ViewChild("form", { static: true }) form: NgForm;

  @ContentChild("txtLine", { static: true }) txtLine: ElementRef;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];

    let allowEdit = this.route.snapshot.queryParams["allowEdit"];

    this.route.params.subscribe(params => {
      id = params["id"];
      console.log("ID : " + id);
    });

    this.route.queryParams.subscribe(queryParams => {
      allowEdit = queryParams["allowEdit"];
      console.log("AllowEdit : " + allowEdit);
    });

    console.log("ID : " + id);
    console.log("AllowEdit : " + allowEdit);
  }

  addProduct() {
    // console.log(this.txtName);
    // console.log(this.txtDesc);

    // this.productService.onProductAdd.next({
    //   name: this.txtName.nativeElement.value,
    //   description: this.txtName.nativeElement.value
    // });

    // this.onProductAdd.emit({
    //   name: this.newProductName,
    //   description: this.newProductDesc
    // });

    console.log(this.form);
    console.log(this.txtName);
    console.log(this.txtDesc);
    this.newProductName = this.newProductDesc = "";
  }

  navigateToProductDetail() {
    this.router.navigate(["/productDetail"], {
      queryParams: { data: true },
      queryParamsHandling: "merge"
    });
  }

  setFormValue() {
    this.form.setValue({
      name: "Name",
      description: "Description",
      email: "test@com",
      gender: "male"
    });
    // this.form.form.patchValue({
    //   name: "Name",
    //   description: "Description"
    // });

    console.log(this.form);
  }

  resetForm() {
    this.form.reset();
  }

  onFormSubmit(result: any) {
    console.log(result);
  }
}
