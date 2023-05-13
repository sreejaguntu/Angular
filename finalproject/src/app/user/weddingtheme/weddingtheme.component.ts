import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-weddingtheme',
  templateUrl: './weddingtheme.component.html',
  styleUrls: ['./weddingtheme.component.css']
})
export class WeddingthemeComponent {
  venueslist:any;
  city:string[]=[
    "All",
    "New Delhi",
    "Chennai",
    "Hyderabad"
  ]
  selected:string="All"
  constructor(private hs:ThemeService){
    this.hs.getVenues().subscribe(
      {
        next: (data:any)=> this.venueslist =data,
        error: ()=> this.venueslist=[]
      }
    )
  }

}
