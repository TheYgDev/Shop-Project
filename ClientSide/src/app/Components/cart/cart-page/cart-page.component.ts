import { Component } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { CartService } from 'src/app/Services/cart.service';
import { Globals } from 'src/app/globals/globals';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  products: Item[] = [];
  totalPrice: number = 0;
  itemsPrice: number = 0;
  totalItem: number = 0;
  coin: string = "";
  rate: number = 1;
  
  constructor(private cartService: CartService,private global:Globals) { 
    this.cartService.getProducts().subscribe(data => { 
      this.products = data as Item[]
      this.itemsPrice = this.cartService.getTotalPrice();
      this.totalPrice = this.itemsPrice;
      this.totalItem = this.cartService.howManyInCart();
      global.currency.subscribe(currency => this.coin = currency);
      global.rate.subscribe(rate => { this.rate = rate; });
     
    })
  }

  checkAvilable(item:Item) {
    if (item.qnt < item.qntBuy) 
      return false;
    
    return true;
  }

  checkOut() {
    let check = "";
    this.products.forEach(item => {
      if (!this.checkAvilable(item)) {
        check += `The item ${item.name} has only ${item.qnt} left in stock\n`;
      }
    });
    if (check.length > 0) {
      alert(check);
      return;
    }
    this.cartService.checkOut().subscribe((data: any) => {
      console.log(data);
      check += data.message;
      console.log(check);
      alert(check);
      this.cartService.removeAllCart();
    }, (error: any) => {

      error = error.error;
      console.log(error);
      check += `${error.message}\n`;
      if (error.items) {
        error.items.forEach((item: any) => {
        check += `The item ${item.name} has only ${item.inStock} left in stock\n`;
        })
      alert(check);
      }
    })

  }

}
