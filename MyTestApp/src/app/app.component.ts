import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import { LoggingService } from "./shared/service/logging.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  products: { name: string; description: string }[];

  @ViewChild("txtHeading", { static: true }) txtHeading: ElementRef;

  title = "MyTestApp1";
  name = "HopeTutors";
  showProduct = true;

  ngOnInit() {
    // this.products = [
    //   { name: "Product 1", description: "Test Description" },
    //   { name: "Product 2", description: "Test Description" }
    // ];
  }

  productAdded(newProduct: { name: string; description: string }) {
    this.products.push(newProduct);
  }
}
