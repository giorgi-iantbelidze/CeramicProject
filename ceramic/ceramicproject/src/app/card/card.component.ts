import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../shared/http.service';
import { Useri } from '../shared/useri.modele';
import { Router} from '@angular/router';
import { ControlEvent } from '@angular/forms';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';






@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   public newcard!:any;
   public I:boolean=false;
   public subtotal:number=0;
   public array:any[]=[];
   public calculate:number=0;
   user1:Useri= new Useri();
   userlist1:Useri[]=[];
   public it:boolean=false;
  constructor( private router1:ActivatedRoute,private http:HttpService,private router:Router){
    this.router1.queryParams.subscribe((data:any)=> this.newcard=data);
    this.array=this.http.massive;
    

  }
  seeinfo(card:any){
    this.router.navigate(
      ['./diteils'],
  
      {queryParams: card}
    )
  };
 
showindex(index:any){

  this.calculate=0;
 this.it=true;
  this.user1.index5=index;
  this.user1.in=this.array[this.user1.index5].imgurl;
  this.user1.price=this.array[this.user1.index5].price;
   this.userlist1.push(this.user1);
   this.user1=new Useri();
  this.sum(index);
 

  

}
public i0:any=1;
public i1:any=1;
public i2:any=1;
public i3:any=1;
public i4:any=1;
public i5:any=1;
public i6:any=1;
public i7:any=1;
public i8:any=1;
public mass:any[]=[this.i0,this.i1,this.i2,this.i3,this.i4,this.i5,this.i6,this.i7,this.i8,];
sum(index:any){
  this.subtotal=Number(this.array[index].price)*this.mass[index]+this.subtotal;
}

ser(index:any){
  console.log(index);
}

 delete(index:any){
 this.subtotal=this.subtotal-Number(this.userlist1[index].price)*this.mass[index];
 this.userlist1.splice(index,1);
 this.mass[index]=1;
 }
 public i:any=0;
public tre:any=1;
plus(index:any){
  console.log(this.userlist1[index].index5);
  console.log(index);
 for(this.i; this.i<this.mass.length; this.i++){
   if(index==this.i){
    this.mass[this.i]++;
//   this.tre=this.mass[this.i]+this.tre;

   }}
   this.i=0;
    this.subtotal=Number(this.userlist1[index].price)+this.subtotal; //*this.mass[index]
   console.log(this.subtotal);
  this.user1.calculate++;
  
  
  }
  minus1(){
    this.user1.calculate--;
  }

  seecard(){
    this.I=true;
  }
  close(){
    this.it=false;
  }

}
