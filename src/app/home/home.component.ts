import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hotels = [];
  newHotel: any = {};
  id: number;
  constructor(private hot: HotelsService) { }

  ngOnInit(): void {
    this.hotels = this.hot.getHotels();
  }

  addHotel(newHotel): void {
    this.hotels = this.hot.addNewHotel(newHotel);
  }
  removeHotel(id): void{
    this.hot.removeHotel('id', id);
  }

}
