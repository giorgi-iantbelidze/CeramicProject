import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { DiteilsComponent } from './diteils/diteils.component';
import { CardComponent } from './card/card.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'shop', component:ShopComponent },
  {path: 'giftcard', component:GiftcardComponent },
  {path:'diteils', component:DiteilsComponent} ,
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
