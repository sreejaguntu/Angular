import { Component } from '@angular/core';
import { FaqComponent } from './faq/faq.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../services/contact.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  contactlist:any;
  feedbacks:any;
  constructor(private cs:ContactService, public dialog: MatDialog, private fs:FeedbackService){

    this.cs.getContacts().subscribe(
      {
        next: (data:any)=>this.contactlist = data,
        error: ()=> this.contactlist = []
      }
    )

    
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FaqComponent, {
      width: '600px', height: '600px'
    })
  }
}
