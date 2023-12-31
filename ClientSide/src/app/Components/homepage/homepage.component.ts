import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/Modules/Item';
import { Category } from 'src/app/Modules/category';
import { CartService } from 'src/app/Services/cart.service';
import { ItemService } from 'src/app/Services/item.service';
import { Globals, SortOrder } from 'src/app/globals/globals';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  productList: Item[] = [];
  searchKey = '';
  categoryList: Category[] = [];
  filterCategory: any;
  sorts: any;
  chosenSort: any =null;

  constructor(
    private activated: ActivatedRoute,
    private apiService: ItemService,
    private cartService: CartService,
    private global: Globals
  ) {
    this.sorts = global.sorts;
  }

  ngOnInit(): void {
    this.apiService.get().subscribe((res) => {
      this.productList = res as Item[];
      this.filterCategory = res;
      this.activated.params.subscribe((params) => {
        const sort = params['prop'] ?? null;
        const order = params['order'] ?? 'desc';
  
        this.chosenSort = this.sorts.find((s: any) => s.prop === sort && s.order === order) ?? this.sorts[0];
        
      });
      this.apiService.getCategories().subscribe((res) => {
        this.categoryList = (res as Category[]).map((category) => ({
          ...category,
          name: this.capitalizeFirstLetter(category.name),
        }));
        this.categoryList.unshift(new Category(0, 'All'));
      });
  
      this.cartService.search.subscribe((val: any) => {
        this.searchKey = val;
      });
  
    }); 
  }

  filter(category: Category) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (!category || category.id == 0 || a.category.id == category.id) {
        return a;
      }
    });
    if (this.chosenSort) {
      this.sort(this.chosenSort);
    }
  }

  sort<T>(sorter: any) {
    if (!sorter) {
      return
    }
    let property: keyof T = sorter.prop;
    let sortOrder: SortOrder = sorter.order;
    if (!property || !sortOrder) {
      this.chosenSort = null;
      return;
    }
    const comparator = (a: T, b: T): number => {
      if (a[property] < b[property]) {
        return sortOrder === SortOrder.Ascending ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return sortOrder === SortOrder.Ascending ? 1 : -1;
      }
      return 0;
    };

    this.filterCategory = this.filterCategory.slice().sort(comparator);
    this.chosenSort = sorter;
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  private capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
