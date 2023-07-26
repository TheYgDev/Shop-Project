import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ItemComponent } from './Components/item/item.component';
import { ItempageComponent } from './Components/itempage/itempage.component';
import { NewitemComponent } from './Components/newitem/newitem.component';
import { FilterPipe } from './shared/filter.pipe';
import { ItemAdapter } from './adapters';
import { HeaderComponent } from './Components/header/header.component';
import { RelatedItemsComponent } from './Components/related-items/related-items.component';
import { StringShortenPipe } from './shared/string-shorten.pipe';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { CartPageComponent } from './Components/cart/cart-page/cart-page.component';
import { CartItemComponent } from './Components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ItemComponent,
    ItempageComponent,
    NewitemComponent,
    FilterPipe,
    HeaderComponent,
    RelatedItemsComponent,
    StringShortenPipe,
    AddToCartComponent,
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
