import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: "chatbox", component:ChatboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
