import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals/globals';


@Injectable({
  providedIn: 'root'
})
export class RatesService {

  
  constructor(private httpClient: HttpClient ,private globals:Globals) { }
  
  private Url = "http://localhost:8080/rates/"

  get(to: string) {
    console.log("going to get rates");
   return this.httpClient.get(this.Url + to);
  }

  getAll() {
    return this.httpClient.get(this.Url);
  }
}
