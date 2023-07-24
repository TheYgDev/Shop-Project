import { Component ,Input } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  @Input() item: Item = new Item();
  @Input() howMany: number = 1;
  
  constructor(private cartService:CartService) {  
  }

  addToCart() {
    for (let i = 0; i < this.howMany; i++) {
      this.cartService.addtoCart(this.item);
    }
  }
}
