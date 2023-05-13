import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-themebox',
  templateUrl: './themebox.component.html',
  styleUrls: ['./themebox.component.css']
})
export class ThemeboxComponent {
  @Input() venues:any;
}
