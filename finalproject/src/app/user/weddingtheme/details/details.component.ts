import { Component } from '@angular/core';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ThemeService } from '../../services/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any;
  details:any;
  venues:any;
  review:any;
  constructor(private hs:ThemeService,public dialog: MatDialog, private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params)=>{
          this.id = params['id']
          this.readData()},
        error: ()=>this.id=0
      }
    )


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ReviewFormComponent, {
      width: '800px', height: '500px'
    })
  }
  
  readData(){
    this.hs.getVenuesById(this.id).subscribe({
      next: (data:any)=> this.venues =data,
      error: ()=> this.venues = {}
   })

   this.hs.getDetails(this.id).subscribe({
      next: (data:any)=> this.details =data,
      error: ()=> this.details = {}
    })
  }


}
