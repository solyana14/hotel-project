import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private HOTELS_API = "http://traddis.com/api/hotels";
  private ROOMS_API = "http://traddis.com/api/rooms"

  constructor(private httpClient:HttpClient) { }

  public getHotelsRequest(){
    return this.httpClient.get(this.HOTELS_API);
  }

  public getHotelByIDRequest(id:number){
    return this.httpClient.get(this.HOTELS_API+ `/${id}`)
  }

  public getRoomOfHotelRequest(hotelId:number){
    let params = new HttpParams();
    params = params.append('hotel_id',`${hotelId}`)
    return this.httpClient.get(this.ROOMS_API ,{params:params})
  }
}
