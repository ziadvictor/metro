import { Component, OnInit } from '@angular/core';
import { StationsService } from "app/stations.service";

@Component({
  selector: 'app-metro',
  templateUrl: './metro.component.html',
  styleUrls: ['./metro.component.css']
})
export class MetroComponent implements OnInit {

  dropdownData;
  railData: any;
  selectedStation: string;
  serviceTime: Number;

  constructor(private stationsService: StationsService) { }

  ngOnInit() {
    // this.stationsService.getMetroStations('');
  }

  onColorClicked(color){
    this.dropdownData = [];
    this.railData = [];
    this.stationsService.getMetroStations(color);
  }

  onStationSelected(realTimeData){
    this.railData = realTimeData.realtimeData
    this.selectedStation = realTimeData.selectedStation;
    this.serviceTime = realTimeData.serviceTime
  }

}
