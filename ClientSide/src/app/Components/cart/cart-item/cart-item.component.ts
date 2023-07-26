import { Component ,Input } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { CartService } from 'src/app/Services/cart.service';
import { Globals } from 'src/app/globals/globals';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css','../cart-page/cart-page.component.css']
})
export class CartItemComponent {
  @Input() item: Item = new Item();
  coin:string =""
  rate: number = 1;

  constructor(private cartService: CartService,private global:Globals) {
    global.currency.subscribe(currency => this.coin = currency)
    global.rate.subscribe(rate => { this.rate = rate;})
    

   }
  
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
