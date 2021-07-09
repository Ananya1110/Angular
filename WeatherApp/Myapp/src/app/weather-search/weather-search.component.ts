import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName,FormGroup,} from '@angular/forms';
import { Subject } from 'rxjs';
import { WeatherItem } from '../weather-item';
import { WeatherService } from '../weather-service';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  private searchStream =new Subject<string>();
  data:any ={}

  constructor(private _weatherService:WeatherService) { }
  onSumbit(){
    // this._weatherService.searchWeatherData(form.value.location)
  // .subscribe(
    data => {
const weatherItem=new WeatherItem(this.data.name,this.data.weather[0].description,this.data.main.temp);
this._weatherService.addWeatherItem(weatherItem);
    }




}
onSearchLocation(cityName:string){
  this.searchStream
  .next(cityName);

}
ngOnInit(){
this.searchStream
      .debounceTime(300)
      .distictUntilChanged()
       .switchMap((input:string)=>this._weatherService.searchWeatherData(input))
       .subscribe(
         data =>this.data=data
        );
}
}
