import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { Input } from '@angular/core';
@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']

})
export class WeatherItemComponent implements OnInit {
@Input()item ='weather-item';
  weatherItem:WeatherItem;
  constructor() {
    // this.weatherItem = new WeatherItem()
  }

  ngOnInit(): void {
  }

}
