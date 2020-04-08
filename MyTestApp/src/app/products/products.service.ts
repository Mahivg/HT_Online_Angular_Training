import { LoggingService } from "../shared/service/logging.service";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  products: any[] = [
    { name: "Product 1", description: "Test1 Description" },
    { name: "Product 2", description: "Test2 Description" },
    { name: "Product 3", description: "Test3 Description" }
  ];

  onProductAdd = new Subject<{
    name: string;
    description: string;
  }>();

  constructor(private loggingService: LoggingService) {}

  addProduct(product: any) {
    // Some action
    this.loggingService.log("product added");
  }

  getProducts() {
    return this.products;
  }
}
