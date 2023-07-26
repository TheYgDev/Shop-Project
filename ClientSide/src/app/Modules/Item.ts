import { Category } from "./category";

export class Item {
    constructor(
        public id: number = 0,
        public name: string = "default item",
        public price: number = 1,
        public description: string = "this is default item",
        public image: string = "../assets/defaultPic.png",
        public city: string = "default city",
        public phone_of_seller: string = "default phone",
        public category: Category = new Category(),
        public dateOfPublish: Date = new Date(),
        public qnt: number = 0,
        public qntBuy: number = 1
      ) {}

}