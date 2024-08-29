import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API_URL = "https://fakestoreapi.com";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  get_products() {
    return this.http.get<any>(`${API_URL}/products`);
  }
}
