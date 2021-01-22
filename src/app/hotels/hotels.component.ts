import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  @Input() hotel:any = {}
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewHotel(hotelId:number):void{  
    this.router.navigate(['/hotelDetails',hotelId])
  
  }

  // getUrl(): any{

  //   let styles = {
  //     'background-image' : `url(${this.hotel.DefaultPicture})`};
  //   return styles;
  // }

  counter() {
    return new Array(this.hotel.StarLevel);
}

}
