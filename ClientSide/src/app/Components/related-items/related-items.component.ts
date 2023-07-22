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
  @Input() itemId: Number = 0; 
  relatedItems: Item[] = [];

  constructor(private apiService: ItemService) {
    setTimeout(() => {
    this.apiService.getByCategory(this.category).subscribe(data => {
      this.relatedItems = data as Item[];
      this.relatedItems = this.relatedItems.filter(item => item.id != this.itemId);
    })
  }, 50);
  }
}
