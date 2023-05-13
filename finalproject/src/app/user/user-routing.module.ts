import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeddingthemeComponent } from './weddingtheme/weddingtheme.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './weddingtheme/details/details.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path: "venues", component:WeddingthemeComponent},
  {path: "aboutus", component:AboutusComponent},
  {path:"details/:id", component:DetailsComponent},
  {path: "vendors", component:VendorsComponent},
  {path: "shop", component:ShopComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
