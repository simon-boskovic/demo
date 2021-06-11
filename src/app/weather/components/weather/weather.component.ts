import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MapboxService } from '@app/autocomplete/services/mapbox.service';
import { Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { WeatherService } from './../../services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnDestroy {
  private _destroy$: Subject<void> = new Subject();
  weather: any;
  iconUrl: string;
  weatherUrl: string;
  weatherInfo: any;
  showWeather: boolean;

  constructor(
    private _weatherService: WeatherService,
    private _mapboxService: MapboxService,
    private _cdr: ChangeDetectorRef
  ) {
    this._mapboxService.currentCity
      .pipe(
        takeUntil(this._destroy$),
        filter((x) => !!x),
        switchMap((city) => {
          return this._weatherService.getWeather(city.geometry.coordinates[1], city.geometry.coordinates[0]);
        })
      )
      .subscribe((res) => {
        this.weather = res;
        this.showWeather = true;
        this.weatherInfo = this.weather.weather[0];
        this.iconUrl = this.weather.weather[0].icon;
        this.weatherUrl = 'http://openweathermap.org/img/wn/' + this.iconUrl + '.png';
        this._cdr.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
