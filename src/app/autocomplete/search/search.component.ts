import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { MapboxService } from './../services/mapbox.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  text: string;
  cities = [];
  constructor(private _mapboxService: MapboxService, private _cdr: ChangeDetectorRef) {}

  getCities() {
    this._mapboxService
      .searchWord(this.text)
      .pipe(take(1))
      .subscribe((res) => {
        this.cities = res;
        this._cdr.markForCheck();
      });
  }

  onCitySelect(item) {
    this._mapboxService.onCitySelect(item);
  }

  ngOnInit(): void {}
}
