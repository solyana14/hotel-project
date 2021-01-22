import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels:any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.getHotels()
  }

  getHotels() :void{
    this.dataService.getHotelsRequest().subscribe((listOfHotels)=>{
      for (const hotel of (listOfHotels as any)) {
        console.log(hotel)
        this.hotels.push(hotel);
      }
    }) 
  }
}
