import { Injectable } from '@angular/core';

import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class StationsService {

  apiKey : string = 'e1eee2b5677f408da40af8480a5fd5a8' //Demo key from WMATA;
  stations = [];
  stationsDropdown = [{'label':'Select a station', 'value':''}];
  errorMsgs = [];
  lineCodeFullName : string = '';


  constructor(private http: Http) { 
    // Load metro stations only one time.
    this.getMetroStations('')
  }

  getMetroStations(lineCode) {
    if(lineCode == ''){
      this.lineCodeFullName = 'All Lines';
    }
    else if(lineCode == 'RD'){
      this.lineCodeFullName = 'Red Line';
    }
    else if(lineCode == 'OR'){
      this.lineCodeFullName = 'Orange Line';
    }
    else if(lineCode == 'SV'){
      this.lineCodeFullName = 'Silver Line';
    }
    else if(lineCode == 'BL'){
      this.lineCodeFullName = 'Blue Line';
    }
    else if(lineCode == 'YL'){
      this.lineCodeFullName = 'Yellow Line';
    }
    else if(lineCode == 'GR'){
      this.lineCodeFullName = 'Green Line';
    }
    let params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.apiKey);
    params.set('LineCode', lineCode);

    return this.http.get('https://api.wmata.com/Rail.svc/json/jStations', {
      search: params
    })
    .map( (response: Response) => response.json())
    .subscribe(
        (stationsList) => {
          this.stations = stationsList.Stations;
          this.stationsDropdown = [{'label':'Stations (Filtered by '+this.lineCodeFullName+')', 'value':''}];
          for( let i=0; i<this.stations.length; i++ ){
            this.stationsDropdown.push({
              'label':this.stations[i].Name, 
              'value':this.stations[i].Code
            })
          };
          return this.stationsDropdown;
      },
      (error) => this.errorMsgs.push({severity:'error', summary:'Error '+error.json().statusCode, detail:error.json().message})
      
    );
  }

  getRealtimeRailData(lineCode) {
    let trainParams: URLSearchParams = new URLSearchParams();
    trainParams.set('api_key', this.apiKey);

    return this.http.get('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/'+lineCode, {
      search: trainParams
    })
    .map( (response: Response) => {
      let data = response.json();
      return data;
    });
    
  }


}
