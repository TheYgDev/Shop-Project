import { Injectable } from '@angular/core';

import { ModelAdapter } from '../contracts';
import { Item } from '../Modules/Item';


@Injectable({
  providedIn: 'root'
})
export class ItemAdapter implements ModelAdapter<any, Item> {
  adapt(item: any): Item {
   return new Item( 
     item.id,
     item.name,
     item.price,
     item.description,
     item.image,
     item.city,
     item.phone_of_seller,
     item.category,
     item.dateOfPublish,
     item.qnt,
    );
  }
  adaptArray = (items: any): Item[] => 
    items.map((item:any) => this.adapt(item));
}