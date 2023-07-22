import { Component  } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';
import { Category } from 'src/app/Modules/category';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent {
  item: Item = new Item()
  category: Category = new Category()
  id: number = 0;
  constructor(private activated: ActivatedRoute, private serv: ItemService) {
    this.activated.params.subscribe(params => {
      this.id = params['id'];
      this.serv.getById(this.id).subscribe(item => {
        this.item = item as Item;
        this.category = this.item.category as Category
      });
    });
  }
}
