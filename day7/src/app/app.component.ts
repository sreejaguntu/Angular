import { Component } from '@angular/core';
import {datafields}  from './appdata/appinfo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webpage';
  services:string[] =datafields.servicelist;
  descriptions:string[]=
  [
    datafields.seoservices,
    datafields.brandingservices,
    datafields.logoservices
  ]
  dataitems=datafields
}
