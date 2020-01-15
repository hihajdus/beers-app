import { Component } from '@angular/core';
import { Beer } from './beer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public beers: Beer[];

  constructor() {
    this.beers = [];
  }

  public addBeer(beer: Beer) {
    this.beers.unshift(beer);
  }

  public removeBeer(beer: Beer) {
    this.beers = this.beers.filter(beer => beer !== beer);
  }
}
