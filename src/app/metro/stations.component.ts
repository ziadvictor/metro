import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import { StationsService } from "app/stations.service";
import {} from '@types/googlemaps';
import { Observable, Subscription } from 'rxjs/Rx';

declare var google;
@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

    @Input() dropdownData
    stationName: string;
    stationStreet: string;
    stationCity: string;
    stationState: string;
    stationZip: string;
    options: any;
    overlays: any[];
    stationRealtimeData = [];

    map: google.maps.Map;

    errorMsgs = [];
    railData: any ;
    realtimeRailData = [];

    currentTime: Date;

    toggleInfo = false;

    @Output() stationSelected = new EventEmitter();

    selectedStationCode: SelectItem[];

    private timer;
    private getRealtimeRailDataTimer: Subscription;

    constructor(private stationsService: StationsService) { }

    ngOnInit() {
      //this.stationsService.getMetroStations('');
    }

    setMap(event) {
        this.map = event.map;
    }

    getRealtimeRailData(code){
      this.currentTime = new Date();
      this.stationsService.getRealtimeRailData(code).subscribe(
        (data) => {
          this.realtimeRailData = data.Trains;
          if(this.realtimeRailData.length == 0){
            this.errorMsgs.push({severity:'warn', summary:'No data received from selected station at this moment.'})
          }
          this.railData = {
            'selectedStation': this.stationName,
            'serviceTime': this.currentTime,
            'realtimeData': []
          };
          for( let i=0; i<this.realtimeRailData.length; i++ ){
            this.railData.realtimeData.push({
              'line':this.realtimeRailData[i].Line, 
              'destination':this.realtimeRailData[i].DestinationName,
              'time':this.realtimeRailData[i].Min
            })
          };
          this.stationSelected.emit(this.railData);
        },
        (error) => this.errorMsgs.push({severity:'error', summary:'Error '+error.json().statusCode, detail:error.json().message})
      );
    }

    getStationInfo(selectedStationCode){
      if(this.getRealtimeRailDataTimer){
        this.getRealtimeRailDataTimer.unsubscribe()
      };
      if(selectedStationCode.value == ''){ //reset station info if no station selected.
        this.toggleInfo = false;
        this.railData = {};
        this.stationSelected.emit(this.railData);
      }
      else{
        this.toggleInfo = true;
      }
      for(let i=0; i<this.stationsService.stations.length; i++){
        if(this.stationsService.stations[i].Code === selectedStationCode.value ){
          this.stationName = this.stationsService.stations[i].Name;
          this.stationStreet = this.stationsService.stations[i].Address.Street;
          this.stationCity = this.stationsService.stations[i].Address.City;
          this.stationState = this.stationsService.stations[i].Address.State;
          this.stationZip = this.stationsService.stations[i].Address.Zip;
          this.options = {
            center: {lat: this.stationsService.stations[i].Lat, lng: this.stationsService.stations[i].Lon},
            zoom: 13
          };
          this.overlays = [
            new google.maps.Marker({position: {lat: this.stationsService.stations[i].Lat, lng: this.stationsService.stations[i].Lon}, title:this.stationName})
          ]
          if(this.map){ //prevent center setting before map init
            this.map.setCenter(new google.maps.LatLng(this.stationsService.stations[i].Lat, this.stationsService.stations[i].Lon));
          }
        }
      }
      if(selectedStationCode.value !== ''){
        this.timer = Observable.timer(0,20000); // Call rails time prediction API and emit data every 20 secs
        this.getRealtimeRailDataTimer = this.timer.subscribe(t => this.getRealtimeRailData(selectedStationCode.value));
      }  
    }

    ngOnChanges() { //reset stations/station info on line filter change
      this.toggleInfo = false;
      this.railData = {};
      this.stationSelected.emit(this.railData);
      if(this.getRealtimeRailDataTimer){
        this.getRealtimeRailDataTimer.unsubscribe();
      }
    }

    ngOnDestroy(){
      if(this.getRealtimeRailDataTimer){
        this.getRealtimeRailDataTimer.unsubscribe();
      }
    }

}
