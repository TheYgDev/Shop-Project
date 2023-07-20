import { Component } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  items: Item[] = [
    new Item() ,
    new Item(),
    new Item(),
    new Item(),
  ];
  searchKey = "";
  public filterCategory : any
  constructor(private serv: ItemService) {
    // this.serv.get().subscribe(items => {
    //   this.items = items as Item[];
    //   this.filterCategory = items;
    // });

    // to remove
    let names = ["shirt", "shoes", "phone", "comp"]
    let conter = 0;
    this.items.forEach(element => {      
      element.name = names[conter++];
    });
      this.filterCategory = this.items;
  }

  filter(category:string){
    this.filterCategory = this.items
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
