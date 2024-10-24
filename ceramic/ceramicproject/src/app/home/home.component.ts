import { Component, numberAttribute } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Useri } from '../shared/useri.modele';
import { Router} from '@angular/router';
import{ Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() public eventediter:EventEmitter<any>=new EventEmitter();
  public array:any;
  public  tr!:any;
  user1:Useri= new Useri();
  userlist1:Useri[]=[];
public vc:any;
public df:any;
   app(index:number){
     this.tr=index;
     console.log(this.tr);
     this.user1.index4=this.tr;
     console.log(this.user1.index4);
   }
  public tre!:any;
  public k:any;
constructor(private http:HttpService, private router:Router,){
  this.array=this.http.massive;
  this.http.seebar();
  this.http.closebar();
  this.http.logic2;
  this.http.logic3;
  this.k=  this.http.seebar();
  }
  
  
  

seeinfo(card:any){
  this.router.navigate(
    ['./diteils'],

    {queryParams: card}
  )
};



}
