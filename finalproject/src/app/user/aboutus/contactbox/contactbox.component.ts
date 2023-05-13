import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contactbox',
  templateUrl: './contactbox.component.html',
  styleUrls: ['./contactbox.component.css']
})
export class ContactboxComponent {
@Input()  contacts:any;
}
