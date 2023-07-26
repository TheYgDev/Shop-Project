import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  loadCart(): void {
    this.cartItemList = JSON.parse(localStorage.getItem("cart_items")!) ?? [];
    this.productList.next(this.cartItemList);
  }

  private saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.cartItemList)); 
  }
  

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.saveCart();
  }

  addtoCart(product: any) {
    let item = this.cartItemList.find((prod:any) => prod.id == product.id);
    if (!item) {
      this.cartItemList.push(product);
    }
    else {
      item.qntBuy += 1;
    }
    this.productList.next(this.cartItemList);
    this.saveCart();
    console.log(this.cartItemList)
    this.getTotalPrice();
  }
  
  howManyInCart(): number {
    let total = 0;
    this.cartItemList.map((a: any) => {
      total += a.qntBuy;
    })
    return total;
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price * a.qntBuy;
    })
    return grandTotal;
  }
  
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if (product.id === a.id) {
        if (a.qntBuy > 1) {
          a.qntBuy -= 1;
        } else {
          this.cartItemList.splice(index, 1);
        }
        this.saveCart();
      }
    })
    this.productList.next(this.cartItemList);
  }

  // removeCartItem(product: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(product.id === a.id){
  //       this.cartItemList.splice(index, 1);
  //       this.saveCart();
  //     }
  //   })
  //   this.productList.next(this.cartItemList);
  // }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    this.saveCart();
  }
}