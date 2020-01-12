import { Component, Input, Output } from '@angular/core';
import { Beer } from '../beer';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent {
  @Output() removeBeer = new EventEmitter<Beer>();
  @Input() beer: Beer;

  get statusName(): string {
    const { status } = this.beer;


  }
}
