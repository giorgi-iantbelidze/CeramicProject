import { Injectable } from '@angular/core';
import { HomeComponent } from '../home/home.component';







@Injectable({
  providedIn: 'root'
})
export class HttpService {
 public calculate4:number=0;

 constructor(  ){

}
public logic2:boolean=false;
public logic3:boolean=true;
seebar(){
this.logic2=true;
this.logic3=false;
}
closebar(){
this.logic2=false;
this.logic3=true;
}
 public index1!:any;
  public massive:any[]=[
    {
      name:'I`am product',
      price:85,
      SKU:'0001',
     imgurl:'https://static.wixstatic.com/media/697bc8_505bcdce5fc045ac8cc7d0746dd13571~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_505bcdce5fc045ac8cc7d0746dd13571~mv2_d_3000_1744_s_2.jpg',
     index:0,
     quantity:[1,2,3,4,5,6,7,8,9,10],
    },
   {
     name:'I`am product',
     price:50,
      SKU:'0002',
    imgurl:'https://static.wixstatic.com/media/697bc8_86a73d621f9d46229e011939975c116e~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_86a73d621f9d46229e011939975c116e~mv2_d_3000_1744_s_2.jpg',
    index:1,
    quantity:[1,2,3,4,5,6,7,8,9,10],
   },
    {
       name:'I`am product',
       price:40,
       SKU:'0003',
       index:2,
       quantity:[1,2,3,4,5,6,7,8,9,10],
      imgurl:'https://static.wixstatic.com/media/697bc8_5b14db998c9f45379e50e7e7fb0ad18c~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_5b14db998c9f45379e50e7e7fb0ad18c~mv2_d_3000_1744_s_2.jpg'
   },
  {
     name:'I`am product',
      price:25,
      SKU:'0004',
      index:3,
      quantity:[1,2,3,4,5,6,7,8,9,10],
       imgurl:'https://static.wixstatic.com/media/697bc8_737c1c161f394fd386b56034244adf2b~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_737c1c161f394fd386b56034244adf2b~mv2_d_3000_1744_s_2.jpg'
     },
   {
       name:'I`am product',
      price:38,
      SKU:'0005',
      index:4,
      quantity:[1,2,3,4,5,6,7,8,9,10],
     imgurl:'https://static.wixstatic.com/media/697bc8_13699a0a215a4763943aebf17183f387~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_13699a0a215a4763943aebf17183f387~mv2_d_3000_1744_s_2.jpg'
    },
     {
      name:'I`am product',
     price:18,
    SKU:'0006',
    index:5,
    quantity:[1,2,3,4,5,6,7,8,9,10],
      imgurl:'https://static.wixstatic.com/media/697bc8_49306eb7e4674636bf3a12f3364f8cbf~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_49306eb7e4674636bf3a12f3364f8cbf~mv2_d_3000_1744_s_2.jpg'
    },
  {
       name:'I`am product',
       price:130,
    SKU:'0007',
    index:6,
    quantity:[1,2,3,4,5,6,7,8,9,10],
       imgurl:'https://static.wixstatic.com/media/697bc8_710b03523be34ead879e7278ee0c4a99~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_710b03523be34ead879e7278ee0c4a99~mv2_d_3000_1744_s_2.jpg'
    },
  {
     name:'I`am product',
    price:45,
    SKU:'0008',
    index:7,
    quantity:[1,2,3,4,5,6,7,8,9,10],
      imgurl:'https://static.wixstatic.com/media/697bc8_f2d08626492e48e1b86e056f7c0e1a6d~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_f2d08626492e48e1b86e056f7c0e1a6d~mv2_d_3000_1744_s_2.jpg'
    },
   {
       name:'I`am product',
      price:95,
     SKU:'0009',
     index:8,
     quantity:[1,2,3,4,5,6,7,8,9,10],
     imgurl:'https://static.wixstatic.com/media/697bc8_c0ed76883931447399276af2f461f9cc~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_c0ed76883931447399276af2f461f9cc~mv2_d_3000_1744_s_2.jpg'
   }
 ];

}
