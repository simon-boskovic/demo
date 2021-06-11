import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '771db6aee3c26dbbb6cd2b96cf5db574';
  constructor(private _httpService: HttpClient) {}

  getWeather(latitude: number, longitude: number) {
    return this._httpService.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`
    );
  }
}
