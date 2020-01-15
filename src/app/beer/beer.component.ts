import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from '../beer';
import { BeerStatus } from '../beer-status.enum';

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
    switch (status) {
      case BeerStatus.DRUNK: return "DRUNK";
      case BeerStatus.BOUGHT: return "BOUGHT";
      case BeerStatus.TO_BUY: return "TO_BUY";
      case BeerStatus.MATURES: return "MATURES";
      default: return "ONE_KNOWS";
    }
  }

  get className() {
    const statusName = this.statusName.split(" ").pop().toLocaleLowerCase();

    return {
      'status': true,
      [`status-${statusName}`]: true
    }
  }

  public remove(): void {
    this.removeBeer.emit(this.beer);
  }
}
