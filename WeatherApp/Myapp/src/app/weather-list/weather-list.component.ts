import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { WEATHER_ITEMS } from '../weather.data';
import { WeatherItemComponent } from '../weather-item/weather-item.component';
import { WeatherService } from '../weather-service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})

export class WeatherListComponent implements OnInit {
 weatherItems: WeatherItem[];
  constructor(private WeatherService:WeatherService) { }

  ngOnInit(): any {
    this.weatherItems=this.WeatherService.getWeatherItems();

  }

}
