import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ItempageComponent } from './Components/itempage/itempage.component';
import { CartPageComponent } from './Components/cart/cart-page/cart-page.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: ':prop/:order', component:HomepageComponent},
  {path: 'details/:id', component:ItempageComponent},
  {path: 'cart', component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
