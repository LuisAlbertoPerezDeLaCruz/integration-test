import { Component, inject, type OnInit } from "@angular/core";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  standalone: true,
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);
  products_data = [];
  constructor() {}

  ngOnInit() {}

  products() {
    this.productsService.get_products().subscribe((products) => {
      this.products_data = products;
      console.log("products: ", this.products_data);
    });
  }
}
