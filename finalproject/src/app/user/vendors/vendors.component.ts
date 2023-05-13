import { Component } from '@angular/core';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {
  destinationlist:any;
  constructor(private hs:DestinationService){
    this.hs.getDestination().subscribe(
      {
        next: (data:any)=> this.destinationlist =data,
        error: ()=> this.destinationlist=[]
      }
    )
  }
}
