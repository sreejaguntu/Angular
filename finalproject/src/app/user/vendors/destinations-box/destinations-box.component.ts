import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destinations-box',
  templateUrl: './destinations-box.component.html',
  styleUrls: ['./destinations-box.component.css']
})
export class DestinationsBoxComponent {
  @Input() destinations:any;
}
