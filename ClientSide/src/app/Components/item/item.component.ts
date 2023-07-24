import { Component ,Input } from '@angular/core';
import { Item } from 'src/app/Modules/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item = new Item();


  cancleRoute(event: MouseEvent) {
    event.stopPropagation();
  }
}
