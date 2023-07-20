import { Injectable } from '@angular/core';
import { Item } from '../Modules/Item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private Url = "http://localhost:3000/movies/"
  constructor(private httpClient: HttpClient) { }


  get() {
    return this.httpClient.get(this.Url)
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

