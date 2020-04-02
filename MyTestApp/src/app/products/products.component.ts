import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ElementRef
} from "@angular/core";
import { LoggingService } from "../shared/service/logging.service";
import { ProductsService } from "./products.service";
import { Router, ActivatedRoute } from "@angular/router";
import { IProductExitGaurd } from "./products-exit-gaurd.service";
import {
  interval,
  Observable,
  throwError,
  Subscriber,
  Subscription
} from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styles: [
    `
      .text-white {
        color: white;
      }

      .text-yellow {
        color: yellow;
      }
    `
  ]
})
export class ProductsComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    IProductExitGaurd {
  productId: number = 10;

  newProductName: string;

  newProductDesc: string;

  productsNames: string[] = ["Product 1", "Product 2", "Product 3"];

  productName: string = "Aloevera";

  productStatus: boolean = false;

  allowProductCreate: boolean = true;

  product: any = { name: "testName", id: 1 };

  products: { name: string; description: string }[];

  @ViewChild("productHeading", { static: true }) pHeading: ElementRef;

  sampleText: string = "";

  observ: any;

  subscription: Subscription;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getProductName() {
    return this.productName;
  }

  onRouteExit() {}

  addProduct() {
    // this.sampleText = "Updated";
    // this.productStatus = true;

    // if (this.newProductName && this.newProductDesc) {
    //   this.products.push({
    //     name: this.newProductName,
    //     description: this.newProductDesc
    //   });
    //   this.newProductName = this.newProductDesc = "";
    // }
    this.productService.addProduct({});
  }

  getBackgroundColor() {
    return this.productStatus ? "blue" : "red";
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    // console.log("ngOnChanges : Called ");
  }

  ngOnInit() {
    // this.logService = new LoggingService();
    // this.logService.log("ngOnInit : Called ");
    // console.log("ngOnInit : Called ");
    this.products = this.productService.getProducts();

    this.productService.onProductAdd.subscribe(data => {
      this.products.push(data);
    });

    // interval(2000).subscribe(data => {
    //   console.log(data);
    // }, err => {}, () => {});

    this.subscription = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        if (count == 3) {
          observer.error("Count reached 4");
        }
        if (count == 4) {
          observer.complete();
        }
        observer.next(count);
        count++;
      }, 1000);
    }).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("The job is done");
      }
    );
  }

  ngDoCheck() {
    // console.log("ngDoCheck : Called ");
  }

  ngAfterContentInit() {
    // console.log("ngAfteContentInit : Called ");
  }

  ngAfterContentChecked() {
    // console.log("ngAfterContentInit : Called ");
  }

  ngAfterViewInit() {
    // console.log("ngAfterViewInit : Called ");
  }

  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked : Called ");
  }

  ngOnDestroy() {
    // console.log("Products ngOnDestroy : Called ");
    this.subscription.unsubscribe();
  }

  navigateToDetails(index: number) {
    this.router.navigate([index, "details"], { relativeTo: this.route });
  }

  navigateToEdit(index: number) {
    this.router.navigate([index, "edit"], { relativeTo: this.route });
  }
}
