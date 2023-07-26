import { Component ,Input } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css','../cart-page/cart-page.component.css']
})
export class CartItemComponent {
  @Input() item: Item = new Item();

  constructor(private cartService: CartService) { }
  
  decrese() {
    this.cartService.removeCartItem(this.item)
  }
  add() {
    this.cartService.addtoCart(this.item)
  }

  remove() {
    this.item.qntBuy = 0;
    this.cartService.removeCartItem(this.item);
  }
}
