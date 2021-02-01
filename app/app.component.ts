import {Component, OnInit, VERSION} from '@angular/core';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    const map = new Map({
      basemap: "topo-vector"
    });

    new MapView({
      container: "viewDiv",
      map: map,
    });
  }
}
