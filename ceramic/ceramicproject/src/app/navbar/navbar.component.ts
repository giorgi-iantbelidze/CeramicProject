import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../shared/user.model';
import { Useri } from '../shared/useri.modele';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  constructor( private http:HttpService, private router:ActivatedRoute,private router1:Router){
    this.router.queryParams.subscribe((data:any)=> this.newcard1=data);
    console.log(this.newcard1);

  }
  
  public newcard1!:any;
  public c:number=-1;
  public mgt:any[]=[];
  public j:number=0;
  public i:number=0;
  user:User= new User();
  userlist:User[]=[];
user1:Useri=new Useri();
userlist1:Useri[]=[];
  public I:boolean=false;
  seecard(){
this.I=true;
console.log(this.userlist1);
  }
  close(){
    this.I=false;
  }
  public logic2:boolean=false;
  
  seebar(){
this.logic2=true;

  }
  closebar(){
this.logic2=false;

  }
    seeinfo1(){
   this.userlist.push(this.user);
   this.c++;
   for(this.j; this.j<this.c+1; this.j++){
    this.i=0;
    if(this.c==this.j){
      for(this.i; this.i<9; this.i++){
      if(this.userlist[this.c].search==this.massive[this.i].price){ 
      this.mgt[this.c]=this.massive[this.i];
      console.log(this.mgt[this.c]);
      console.log(this.user.search);
      }
    }
  }
  }
  this.j=0;
       this.router1.navigate(
       ['./diteils'],
        {queryParams: this.mgt[this.c] }
        )
        this.user=new User();
      }
  public massive:any[]=[
    {
      name:'I`am product',
      price:85,
      SKU:'0001',
     imgurl:'https://static.wixstatic.com/media/697bc8_505bcdce5fc045ac8cc7d0746dd13571~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_505bcdce5fc045ac8cc7d0746dd13571~mv2_d_3000_1744_s_2.jpg',
     index:0
    },
   {
     name:'I`am product',
     price:50,
      SKU:'0002',
    imgurl:'https://static.wixstatic.com/media/697bc8_86a73d621f9d46229e011939975c116e~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_86a73d621f9d46229e011939975c116e~mv2_d_3000_1744_s_2.jpg',
    index:1
   },
    {
       name:'I`am product',
       price:40,
       SKU:'0003',
       index:2,
      imgurl:'https://static.wixstatic.com/media/697bc8_5b14db998c9f45379e50e7e7fb0ad18c~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_5b14db998c9f45379e50e7e7fb0ad18c~mv2_d_3000_1744_s_2.jpg'
   },
  {
     name:'I`am product',
      price:25,
      SKU:'0004',
      index:3,
       imgurl:'https://static.wixstatic.com/media/697bc8_737c1c161f394fd386b56034244adf2b~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_737c1c161f394fd386b56034244adf2b~mv2_d_3000_1744_s_2.jpg'
     },
   {
       name:'I`am product',
      price:38,
      SKU:'0005',
      index:4,
     imgurl:'https://static.wixstatic.com/media/697bc8_13699a0a215a4763943aebf17183f387~mv2_d_3000_1744_s_2.jpg/v1/fill/w_580,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_13699a0a215a4763943aebf17183f387~mv2_d_3000_1744_s_2.jpg'
    },
     {
      name:'I`am product',
     price:18,
    SKU:'0006',
    index:5,
      imgurl:'https://static.wixstatic.com/media/697bc8_49306eb7e4674636bf3a12f3364f8cbf~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_49306eb7e4674636bf3a12f3364f8cbf~mv2_d_3000_1744_s_2.jpg'
    },
  {
       name:'I`am product',
       price:130,
    SKU:'0007',
    index:6,
       imgurl:'https://static.wixstatic.com/media/697bc8_710b03523be34ead879e7278ee0c4a99~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_710b03523be34ead879e7278ee0c4a99~mv2_d_3000_1744_s_2.jpg'
    },
  {
     name:'I`am product',
    price:45,
    SKU:'0008',
    index:7,
      imgurl:'https://static.wixstatic.com/media/697bc8_f2d08626492e48e1b86e056f7c0e1a6d~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_f2d08626492e48e1b86e056f7c0e1a6d~mv2_d_3000_1744_s_2.jpg'
    },
   {
       name:'I`am product',
      price:95,
     SKU:'0009',
     index:8,
     imgurl:'https://static.wixstatic.com/media/697bc8_c0ed76883931447399276af2f461f9cc~mv2_d_3000_1744_s_2.jpg/v1/fill/w_422,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697bc8_c0ed76883931447399276af2f461f9cc~mv2_d_3000_1744_s_2.jpg'
   }
  ];
 
}
