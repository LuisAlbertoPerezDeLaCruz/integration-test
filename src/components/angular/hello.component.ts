import { NgIf } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { ProductsService } from "./products.service";
import { ProductsComponent } from "./products/products.component";

@Component({
  selector: "app-hello",
  standalone: true,
  imports: [NgIf, ProductsComponent],
  template: `
    <p>Hello from Angular!!</p>

    <button (click)="toggle()">Toggle</button>

    <div *ngIf="show == true">Toggled</div>

    <app-products *ngIf="show" />
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

  show = false;

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}
