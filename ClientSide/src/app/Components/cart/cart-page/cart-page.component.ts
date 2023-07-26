import { Component } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  products: Item[] = [];
  totalPrice: Number = 0;
  itemsPrice: Number = 0;
  totalItem: Number = 0;
  constructor(private cartService: CartService) { 
    this.cartService.getProducts().subscribe(data => { 
      this.products = data as Item[]
      this.itemsPrice = this.cartService.getTotalPrice();
      this.totalPrice = this.itemsPrice;
      this.totalItem = this.cartService.howManyInCart();
    })
  }

}
