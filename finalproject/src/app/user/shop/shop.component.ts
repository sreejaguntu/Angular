import { Component } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { MatDialog } from '@angular/material/dialog';
import { ChatboxComponent } from './chatbox/chatbox.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  functionslist:any;
  typeslist:any;
  trendinglist:any;
  constructor(private hs:ShopService, public dialog: MatDialog){
    this.hs.getFunctions().subscribe(
      {
        next: (data:any)=> this.functionslist =data,
        error: ()=> this.functionslist=[]
      }
    )
    this.hs.getTypes().subscribe(
      {
        next: (data:any)=> this.typeslist =data,
        error: ()=> this.typeslist=[]
      }
    )
    this.hs.getTrending().subscribe(
      {
        next: (data:any)=> this.trendinglist =data,
        error: ()=> this.trendinglist=[]
      }
    )
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ChatboxComponent, {
      width: '600px', height: '600px'
    })
  }
}
