import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

const API_URL = "https://fakestoreapi.com";

@Injectable()
export class ProductsService {
  http = inject(HttpClient);

  constructor() {}

  get_products() {
    this.http.get<any>(`${API_URL}/products`).subscribe((products) => {
      console.log({ products });
    });
  }
}
