import { NgIf } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { ProductsService } from "./products.service";

@Component({
  selector: "app-hello",
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>

    <button (click)="toggle()">Toggle</button>

    <div *ngIf="show == true">Toggled</div>

    <button (click)="products()">Products</button>
  `,
  providers: [HttpClient],
})
export class HelloComponent implements OnInit {
  /*
    You need provideHttpClient(withFetch()) in the renderProviders also for when its server-rendered. 
    If you are only rendering static content at build-time, use renderProviders. 
    If you're rendering at build-time and hydrating at runtime, use both renderProviders and clientProviders
  */
  static clientProviders = [provideHttpClient(), ProductsService];
  static renderProviders = [provideHttpClient(withFetch()), ProductsService];

  productsService = inject(ProductsService);
  products_data = [];
  show = false;

  ngOnInit() {}

  products() {
    this.productsService.get_products().subscribe((products) => {
      this.products_data = products;
      console.log("products: ", this.products_data);
    });
  }

  toggle() {
    this.show = !this.show;
  }
}
