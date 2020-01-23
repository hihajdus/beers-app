import { Component } from '@angular/core';
import { Beer } from './beer';

export type MarkType = 'add' | 'list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mark: MarkType = 'add';

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

  get showAddBeer() {
    return this.mark === 'add';
  }

  get showListBeer() {
    return this.mark === 'list';
  }

  toggleMark(type: MarkType) {
    this.mark = type;
  }
}
