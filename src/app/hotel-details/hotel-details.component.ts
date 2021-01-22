import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../data.service'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  
  hotel:any = {}
  rooms: any =[]

  hotelId:any


  constructor(private dataService: DataService,public router: Router,public route:ActivatedRoute) {
    // console.log(this.route.snapshot.paramMap.get('hotelId'))
    this.hotelId = this.route.snapshot.paramMap.get('hotelId')
   
   }

  ngOnInit(): void {
    
    this.getHotel()
    this.getRooms()
  }

  getHotel() :void{
    this.dataService.getHotelByIDRequest(this.hotelId).subscribe(hotel=>{
      console.log(hotel)
      this.hotel = hotel
    })
  }

  getRooms() :void{
    this.dataService.getRoomOfHotelRequest(this.hotelId).subscribe((listOfRooms)=>{
      for (const room of (listOfRooms as any)) {
        console.log(room)
        this.rooms.push(room);
      }
      // this.rooms = rooms
      // console.log(this.rooms)
    }) 
  }

  counter() {
    return new Array(this.hotel.StarLevel);
}


 

}
