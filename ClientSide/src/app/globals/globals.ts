import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RatesService } from '../Services/rates.service';

@Injectable()

export class Globals{
    public currency = new BehaviorSubject<string>("");
    public rate = new BehaviorSubject<number>(1);

    
    loadCoin(): void {
        this.currency.next(sessionStorage.getItem("currency") ?? "USD");
      }
    
    saveCoin(): void {
        sessionStorage.setItem('currency', this.currency.getValue()); 
      }
}
   