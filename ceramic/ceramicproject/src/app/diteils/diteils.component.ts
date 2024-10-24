import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';



@Component({
  selector: 'app-diteils',
  templateUrl: './diteils.component.html',
  styleUrl: './diteils.component.css',
})
export class DiteilsComponent {
public newcard:any;
public array:any[];
public counter:number=0;
public t:number=0;
public l:boolean=true;

constructor(private http : HttpService, private router:ActivatedRoute){
 this.router.queryParams.subscribe((data:any)=> this.newcard=data);
this.array=this.http.massive;
console.log(this.newcard.index)
}

next(){
  
    this.t++;
   this.counter=Number(this.newcard.index)+this.t;
   console.log(Number(this.newcard.index));
   console.log(this.counter);
   if(this.counter<9){
     this.l=true;
   }
   else{
    this.l= false;
  };
}

pre(){
 
   this.t--;
   console.log(this.t);
  
  this.counter--;
  console.log(this.counter);
  if(this.counter<9){
    this.l=true;
  }
  else{
   this.l= false;
 };
}
}
