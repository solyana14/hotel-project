import { NgModule } from '@angular/core';
import {HotelListComponent} from './hotel-list/hotel-list.component'
import {HotelDetailsComponent} from './hotel-details/hotel-details.component'
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];
const routes: Routes = [
  {path: '',redirectTo:'hotels',pathMatch: 'full'},
  {path:'hotels',component:HotelListComponent},
  {path:'hotelDetails/:hotelId', component:HotelDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
