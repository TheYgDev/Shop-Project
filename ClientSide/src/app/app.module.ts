import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { Globals } from 'src/app/globals/globals';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { CartItemComponent } from './Components/cart/cart-item/cart-item.component';
import { CartPageComponent } from './Components/cart/cart-page/cart-page.component';
import { DropDownchComponent } from './Components/drop-down/drop-down.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ItemComponent } from './Components/item/item.component';
import { ItempageComponent } from './Components/itempage/itempage.component';
import { NewitemComponent } from './Components/newitem/newitem.component';
import { RelatedItemsComponent } from './Components/related-items/related-items.component';
import { ItemAdapter } from './adapters';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangePipe } from './shared/exchange.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { StringShortenPipe } from './shared/string-shorten.pipe';


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
    CartItemComponent,
    ExchangePipe,
    DropDownchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ItemAdapter,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
