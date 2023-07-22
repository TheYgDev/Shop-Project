import { Injectable } from '@angular/core';
import { Item } from '../Modules/Item';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Modules/category';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private Url = "http://localhost:8080/items/"
  constructor(private httpClient: HttpClient) { }


  get() {
    return this.httpClient.get(this.Url)
  }
  getByCategory(category: Category) {
    console.log(category.id);
      return this.httpClient.get(this.Url +`categories/${category.id}`)
  }

  getById(id: number) {
    return this.httpClient.get(this.Url + id)
  }
  delete(id: number) {
    return this.httpClient.delete(this.Url + id)
  }

  post(item: Item) {
    return this.httpClient.post(this.Url, item)
  }

  put(i: Item) {
    return this.httpClient.put(this.Url + i.id, i)
  }
}

