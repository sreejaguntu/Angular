import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value1:number=0;
  value2:number=2000;
  productlist:any;
  types:string[]=[
    "All",
    "electronics",
    "beauty",
    "books",
    "sports"
  ]

  selected:string="All"
  
  constructor(private hs:HomeService){
    this.hs.getProducts().subscribe({
      next: (data:any)=> this.productlist =data,
      error: ()=> this.productlist=[]
    })
  }

}
