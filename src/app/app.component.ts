import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
    <select [(ngModel)]="currentCulture" (change)="onChange()">
      <option *ngFor="let c of availableCultures" [ngValue]="c.culture">{{c.title}}</option>
    </select>
      <h1 [translate]="'HELLO'" [translateParams]='{value: title}'></h1>
      <h2 [translate]="'HELLO_SEC'"></h2>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
  `,
  styles: []
})
export class AppComponent {
  constructor(translate: TranslateService) {
    this.translator = translate;
    this.translator.setDefaultLang(this.availableCultures[0].culture);
  }
  
  onChange() {
    this.translator.use(this.currentCulture);
  }

  translator;
  title = 'Avantida Developer';
  availableCultures = [{
    title: 'English',
    culture: "en-us"
  },
  {
    title: 'Polish',
    culture: "pl-pl"
  },
  {
    title: 'Ukrainian',
    culture: "ua-ua"
  }];
  currentCulture = this.availableCultures[0].culture;
}
