import { Inject, Injectable } from "@angular/core";
import { error } from "console";
import { Observable } from "rxjs/internal/Observable";
import { WEATHER_ITEMS } from "./weather.data";
import { HttpClient } from '@angular/common/http';
import { WeatherItem } from "./weather-item";
import { map } from 'rxjs/operators';
@Injectable()
export class WeatherService
{
constructor(private _http:HttpClient){}
getWeatherItems(){
  return WEATHER_ITEMS;


}
addWeatherItem(weatherItem:WeatherItem){
  WEATHER_ITEMS.push()
}
clearWeatherItems(){
  WEATHER_ITEMS.splice(0);
}
searchWeatherData(cityName:string): Observable<any>{
  return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName + '& cnt={cnt}&appid={2a8573b20e7feeb67cb921e8f7621306')
.map(response=> response.json())
  .catch.error(error);
  return Observable.throw(error.json())
});
}

