import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MapboxService } from '@app/autocomplete/services/mapbox.service';
import * as mapboxgl from 'mapbox-gl';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MapComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<void> = new Subject();
  map: mapboxgl.map;
  constructor(private _mapboxService: MapboxService) {}

  ngOnInit(): void {
    this.showMap();
    this._mapboxService.currentCity
      .pipe(
        takeUntil(this._destroy$),
        filter((x) => !!x)
      )
      .subscribe((res) => {
        console.log(res);
        this.map.setCenter([res.geometry.coordinates[0], res.geometry.coordinates[1]]);
        this.map.setZoom(12);
      });
  }

  showMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;

    this.map = new mapboxgl.Map({
      container: 'myMap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [74.5, 40],
      zoom: 12
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
