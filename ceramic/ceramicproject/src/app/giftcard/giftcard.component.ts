import { Component } from '@angular/core';

@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrl: './giftcard.component.css'
})
export class GiftcardComponent {
 
 calculate:number=0;
 price:any=`$25`;
 logic:boolean=true;
 open(){
   this.logic=true;
 }
 close(){
   this.logic=false;
 }
 


 prices:any[]=[`$25`,`$50`,`$100`,`$200`,`$400`];
 printindex(index:number){
 this.price=this.prices[index];
}

plus(){
this.calculate++;
}
minus1(){
  this.calculate--;
}


}
