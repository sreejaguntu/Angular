import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsComponent } from './pages/reach-us/complaints/complaints.component';
import { ProductsBoxComponent } from './pages/home/products-box/products-box.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/reach-us/contact/contact.component';
import { ReachUsComponent } from './pages/reach-us/reach-us.component';
import { DetailsComponent } from './pages/home/details/details.component';

const routes: Routes = [ 

  {path:"reach-us", component: ReachUsComponent },
  {path: "details/:id", component: DetailsComponent},
  {path:"",component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
