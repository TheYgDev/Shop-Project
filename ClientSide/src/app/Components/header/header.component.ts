import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { RatesService } from 'src/app/Services/rates.service';
import { Globals } from 'src/app/globals/globals';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem : number = 0;
  public searchTerm !: string;
  coin: string = "";
  conter = 0;
  constructor(private cartService: CartService, private global: Globals,private rateService: RatesService ) { 
    global.currency.subscribe(currency => {
      if (currency) {
        this.rateService.get(currency).subscribe((rates) => {
          this.global.rate.next(rates as number);
        });
      }
      this.coin = currency;
    });
  }
  
  ngOnInit(): void {
    this.cartService.loadCart();
    this.global.loadCoin();
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = this.cartService.howManyInCart();
    })
  }



  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  changeCurrency(coinValue:string) {
    this.global.currency.next(coinValue);
    this.global.saveCoin();
  }
}
