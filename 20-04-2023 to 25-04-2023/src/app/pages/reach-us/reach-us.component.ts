import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-reach-us',
  templateUrl: './reach-us.component.html',
  styleUrls: ['./reach-us.component.css']
})
export class ReachUsComponent {
  
  contactlist:any;
  constructor(private cs:ContactService){

    this.cs.getContacts().subscribe(
       {
         next: (data:any)=>this.contactlist = data,
         error: ()=> this.contactlist = []
       }
    )
  }
}
