import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {HotelDetailsComponent} from './hotel-details/hotel-details.component'
import {HotelListComponent} from './hotel-list/hotel-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {  MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    HotelDetailsComponent,
    HotelListComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
