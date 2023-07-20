import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ItempageComponent } from './Components/itempage/itempage.component';

const routes: Routes = [
  {path: '', component:HomepageComponent},
  {path: 'details/:id', component:ItempageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
