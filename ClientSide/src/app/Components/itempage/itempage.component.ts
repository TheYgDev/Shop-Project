import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Modules/Item';
import { Category } from 'src/app/Modules/category';
import { ItemService } from 'src/app/Services/item.service';
import { Globals } from 'src/app/globals/globals';


@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent {
  item: Item = new Item()
  category: Category = new Category()
  id: number = 0;
  howMany: number = 1;
  coin:string =""
  rate: number = 1;

  constructor(private activated: ActivatedRoute, private serv: ItemService,private global:Globals) {
    this.activated.params.subscribe(params => {
      this.id = params['id'];
      this.serv.getById(this.id).subscribe(item => {
        this.item = item as Item;
        this.category = this.item.category as Category
      });
      global.currency.subscribe(currency => this.coin = currency)
    global.rate.subscribe(rate => { this.rate = rate;})
      
    });
  }
}
