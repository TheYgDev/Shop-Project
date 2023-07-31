import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ItempageComponent } from './Components/itempage/itempage.component';
import { CartPageComponent } from './Components/cart/cart-page/cart-page.component';
import { NewitemComponent } from './Components/newitem/newitem.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'details/:id', component:ItempageComponent},
  {path: 'sort/:prop/:order', component:HomepageComponent},
  {path: 'cart', component:CartPageComponent},
  {path: 'addnew', component:NewitemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
