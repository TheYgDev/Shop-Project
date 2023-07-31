import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Modules/Item';
import { Category } from 'src/app/Modules/category';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent {

  categoryList: Category[] = [];
  item: Item = new Item();
  constructor(private router: Router,private api :ItemService) {
  
    this.api.getCategories().subscribe(categories => this.categoryList = categories as Category[]);
    
  }


  Submit() {
    this.api.post(this.item).subscribe(data => {
      alert("Item added succesfully");
          this.router.navigateByUrl('/details/'+data);

     });
  }
}
