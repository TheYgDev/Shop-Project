import { Category } from "./category";

export class Item {
    id?: number = 0;
    name?: string= "default item";
    price?: number = 1;
    description?: string = "this is defualt item";
    image?: string = "../assets/defaultPic.png";
    city?: string ="defualt city";
    phone_of_seller?: string = "defualt phone";
    category?: Category = new Category();
    dateOfPublish?: Date = new Date();
}