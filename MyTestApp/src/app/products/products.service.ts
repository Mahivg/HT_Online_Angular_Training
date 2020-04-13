import { LoggingService } from "../shared/service/logging.service";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

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

  httpHeaders = new HttpHeaders({
    Authorization: "apiKey"
  });

  constructor(
    private loggingService: LoggingService,
    private httpClient: HttpClient
  ) {}

  addProduct(product: any) {
    // Some action
    this.loggingService.log("product added");
  }

  getProducts() {
    return this.products;
  }

  postMyProducts() {
    return this.httpClient.post(
      "https://mytestapplication-f1239.firebaseio.com/mytestapplication-f1239.json",
      {
        name: "product1",
        price: 100
      },
      {
        params: new HttpParams().set("dataType", "value")
      }
    );
  }

  getMyProducts() {
    return this.httpClient.get(
      "https://mytestapplication-f1239.firebaseio.com/mytestapplication-f1239.json"
    );
  }
}
