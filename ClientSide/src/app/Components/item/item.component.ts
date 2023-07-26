import { Component ,Input } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { Globals } from 'src/app/globals/globals';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item = new Item();
  coin: string = "";
  rate: number = 1;
  constructor(private global: Globals) {
    global.currency.subscribe(currency => { this.coin = currency;})
    global.rate.subscribe(rate => { this.rate = rate;})
   }

  cancleRoute(event: MouseEvent) {
    event.stopPropagation();
  }
}
