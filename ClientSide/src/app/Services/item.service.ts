import { Injectable } from '@angular/core';
import { Item } from '../Modules/Item';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Modules/category';
import { Observable } from 'rxjs';
import { ItemAdapter } from '../adapters';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private Url = "http://localhost:8080/items/"
  constructor(private httpClient: HttpClient ,private itemAdapter:ItemAdapter) { }


  get():Observable<Item[]> {
    return this.httpClient.get(this.Url)
      .pipe(map(this.itemAdapter.adaptArray));
  }
  getCategories() {
    return this.httpClient.get(this.Url + "categories"); 
  }
  getByCategory(category: Category):Observable<Item[]> {
    return this.httpClient.get(this.Url + `categories/${category.id}`)
    .pipe(map(this.itemAdapter.adaptArray));
  }

  getById(id: number): Observable<Item> {
    return this.httpClient.get(this.Url + id)
      .pipe((map(this.itemAdapter.adapt)));
  }
  delete(id: number) {
    return this.httpClient.delete(this.Url + id);
  }

  post(item: Item) {
    return this.httpClient.post(this.Url+"add", item);
  }

  put(i: Item) {
    return this.httpClient.put(this.Url + i.id, i);
  }

}

