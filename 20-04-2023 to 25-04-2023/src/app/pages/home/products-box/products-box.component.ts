import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
  styleUrls: ['./products-box.component.css']
})
export class ProductsBoxComponent {
  @Input() products:any;
}
