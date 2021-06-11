import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {
  private _city$ = new BehaviorSubject<any>(null);
  currentCity = this._city$.asObservable();
  constructor(private _http: HttpClient) {}

  onCitySelect(city: any) {
    this._city$.next(city);
  }

  searchWord(query: string) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this._http.get(url + query + '.json?limit=5&access_token=' + environment.mapbox.accessToken).pipe(
      map((res: any) => {
        return res.features;
      }),
      tap((x) => console.log(x))
    );
  }
}
