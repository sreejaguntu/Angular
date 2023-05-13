import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { WeddingthemeComponent } from './weddingtheme/weddingtheme.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './aboutus/faq/faq.component';
import { ContactboxComponent } from './aboutus/contactbox/contactbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeboxComponent } from './weddingtheme/themebox/themebox.component';
import { DetailsComponent } from './weddingtheme/details/details.component';
import { ReviewFormComponent } from './weddingtheme/details/review-form/review-form.component';
import { ReviewBoxComponent } from './weddingtheme/details/review-form/review-box/review-box.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DestinationsBoxComponent } from './vendors/destinations-box/destinations-box.component';
import { ShopComponent } from './shop/shop.component';
import { FunctionsComponent } from './shop/functions/functions.component';
import { TypesComponent } from './shop/types/types.component';
import { TrendingComponent } from './shop/trending/trending.component';
import { CityfilterPipe } from './pipes/cityfilter.pipe';
import { ChatboxComponent } from './shop/chatbox/chatbox.component';




@NgModule({
  declarations: [
    HomeComponent,
    WeddingthemeComponent,
    AboutusComponent,
    FaqComponent,
    ContactboxComponent,
    ThemeboxComponent,
    DetailsComponent,
    ReviewFormComponent,
    ReviewBoxComponent,
    VendorsComponent,
    DestinationsBoxComponent,
    ShopComponent,
    FunctionsComponent,
    TypesComponent,
    TrendingComponent,
    CityfilterPipe,
    ChatboxComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
  
  ]
})
export class UserModule { }
