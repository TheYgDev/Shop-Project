import { Component } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { Category } from 'src/app/Modules/category';
import { CartService } from 'src/app/Services/cart.service';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  productList: Item[] = [];
  
  searchKey = "";
  public filterCategory : any
  constructor(private apiService: ItemService,private cartService : CartService) {
    this.apiService.get().subscribe(res => {
      this.productList = res as Item[];
      this.filterCategory = res;
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  filter(category:Category){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(!category || a.category.id == category.id ){
        return a;
      }
    })
  }
  
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
