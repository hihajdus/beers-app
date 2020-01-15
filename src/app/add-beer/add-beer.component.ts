import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Beer } from '../beer';
import { BeerStatus } from '../beer-status.enum';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent {
  @Output() addBeer = new EventEmitter<Beer>();
  beer: Beer;

  constructor() {
    this.setInitial();
  }

  public add(): void {
    const  { name, status } = this.beer;

    if(name.length > 0) {
      this.beer.status = +status;
      this.addBeer.emit(this.beer);
      this.setInitial();
    }
  }

  private setInitial(): void {
    this.beer = {
      name: "",
      status: BeerStatus.ONE_KNOWS
    }
  }
}
