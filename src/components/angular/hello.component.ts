import { NgIf } from "@angular/common";
import { Component, inject, type OnInit } from "@angular/core";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";

const API_URL = "https://fakestoreapi.com";

@Component({
  selector: "app-hello",
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Hello from Angular!!</p>

    <button (click)="toggle()">Toggle</button>

    <div *ngIf="show == true">Toggled</div>

    <button (click)="(true)">Products</button>
  `,
  providers: [HttpClient],
})
export class HelloComponent implements OnInit {
  /*
    You need provideHttpClient(withFetch()) in the renderProviders also for when its server-rendered. 
    If you are only rendering static content at build-time, use renderProviders. 
    If you're rendering at build-time and hydrating at runtime, use both renderProviders and clientProviders
  */
  static clientProviders = [provideHttpClient()];
  static renderProviders = [provideHttpClient(withFetch())];

  http = inject(HttpClient);

  show = false;

  ngOnInit() {
    console.log("Entre en ngOnInit");
    this.http.get<any>(`${API_URL}/products`).subscribe((products) => {
      console.log({ products });
    });
  }

  toggle() {
    this.show = !this.show;
  }
}
