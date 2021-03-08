import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import Map from "ol/Map";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import OSM from "ol/source/OSM";
import * as olProj from "ol/proj";
import TileLayer from "ol/layer/Tile";
@Component({
  selector: "app-insert-luogo",
  templateUrl: "./insert-luogo.component.html",
  styleUrls: ["./insert-luogo.component.scss"],
})
export class InsertLuogoComponent implements OnInit {
  map: any;
  constructor(private http: HttpClient, public fb: FormBuilder) {}
  public formGroup: FormGroup;
  ngOnInit() {
    this.formGroup = this.fb.group({
      titolo: [""],
      descrizione: [""],
      foto1: [""],
      foto2: [""],
      foto3: [""],
      coordinate: [""],
    });
    this.map = new Map({
      target: "hotel_map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: olProj.fromLonLat([7.0785, 51.4614]),
        zoom: 5,
      }),
    });
  }

  send() {
    this.post(this.formGroup.value).subscribe(() => {
      this.formGroup = this.fb.group({
        titolo: [""],
        descrizione: [""],
        foto1: [""],
        foto2: [""],
        foto3: [""],
        coordinate: [""],
      });
    });
  }

  public patch(body: any, id: any): Observable<any> {
    return this.http.put(" http://localhost:8900/api/Luoghi/" + id, body);
  }

  public get(): Observable<any> {
    return this.http.get("http://localhost:8900/api/Luoghi");
  }

  public post(body: any): Observable<any> {
    return this.http.post("http://localhost:8900/api/Luoghi", body);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete("http://localhost:8900/api/Luoghi/" + id);
  }
}
