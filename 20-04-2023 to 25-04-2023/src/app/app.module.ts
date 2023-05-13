import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from './material/material.module';
import { ComplaintsComponent } from './pages/reach-us/complaints/complaints.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReachUsComponent } from './pages/reach-us/reach-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsBoxComponent } from './pages/home/products-box/products-box.component';
import { ContactComponent } from './pages/reach-us/contact/contact.component';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { RangepipePipe } from './pipes/rangepipe.pipe';
import { DetailsComponent } from './pages/home/details/details.component';
import { ReviewFormComponent } from './pages/home/details/review-form/review-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ComplaintsComponent,
    ReachUsComponent,
    HomeComponent,
    ProductsBoxComponent,
    ContactComponent,
    TypefilterPipe,
    RangepipePipe,
    DetailsComponent,
    ReviewFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
