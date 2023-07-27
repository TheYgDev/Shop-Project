import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class Globals{
    public currency = new BehaviorSubject<string>("");
    public rate = new BehaviorSubject<number>(1);
    public coinList = [
    { id: "USD", name: "USD (US dollar)" },
    { id: "ILS", name: "ILS (Israeli shakel)" },
    { id: "EUR", name: "EUR (Euro)" },
    { id: "JPY", name: "JPY (Japanese yen)" },
    { id: "GBP", name: "GBP (Pound sterling)" },
    { id: "AUD", name: "AUD (Australian dollar)" },
    { id: "CAD", name: "CAD (Canadian dollar)" }
  ];

  public sorts = [   
    { prop:"defualt" , order :"nothing",name: "Filter - None"},
    { prop:'price' , order : SortOrder.Ascending,name: "Lowest Price"},
    { prop:'price' , order : SortOrder.Descending,name: "Highest Price"},
    { prop:'dateOfPublish' , order : SortOrder.Ascending,name: "Oldest Items"},
    { prop:'dateOfPublish' , order : SortOrder.Descending,name: "Newest Items"},
    { prop:'name' , order : SortOrder.Ascending,name: "Name A-Z"},
    { prop:'name' , order : SortOrder.Descending,name: "Name Z-A"},
    // { prop:'' , order : SortOrder.Ascending,name: ""},
    // { prop:'' , order : SortOrder.Descending,name: ""},
    // { prop:'' , order : SortOrder.Ascending,name: ""},
    // { prop:'' , order : SortOrder.Descending,name: ""},

  ]


    
    loadCoin(): void {
        this.currency.next(sessionStorage.getItem("currency") ?? "USD");
      }
    
    saveCoin(): void {
        sessionStorage.setItem('currency', this.currency.getValue()); 
      }
}

export enum SortOrder {
  Ascending = 'asc',
  Descending = 'desc',
}