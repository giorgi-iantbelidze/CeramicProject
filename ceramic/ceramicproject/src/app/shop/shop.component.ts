import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public array1:any;
constructor(private http: HttpService, private router:Router){
  this.array1=this.http.massive;
 


}
seeinfo(card:any){
  this.router.navigate(
    ['./diteils'],
    {queryParams: card}
  )
}
}
