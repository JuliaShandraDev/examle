import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '4b5b8dc1667de3e4a4210637663e628d';
  url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  temprice = '&units=metric';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: any) {
    return this.http.get(this.url + city + '&appid=' + this.apiKey + this.temprice)
  }
}
