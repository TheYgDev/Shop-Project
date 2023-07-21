import { Component ,Input } from '@angular/core';
import { Item } from 'src/app/Modules/Item';
import { Category } from 'src/app/Modules/category';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-related-items',
  templateUrl: './related-items.component.html',
  styleUrls: ['./related-items.component.css']
})
export class RelatedItemsComponent {
  @Input() category: Category = new Category();
  relatedItems: Item[] = [];

  constructor(private apiService: ItemService) {
    this.apiService.getByCategory(this.category).subscribe(data => {
      this.relatedItems = data as Item[];
    })
    console.log(this.category.id);
  }
}
