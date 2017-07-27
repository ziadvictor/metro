import { Component, OnInit, Input } from '@angular/core';
import { TrainScheduleService } from "app/train-schedule.service";

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit {
    
    lines: any[];
    @Input() railData = [];
    @Input() selectedStation;
    @Input() serviceTime;

    constructor() { }

    ngOnInit() {
        
        this.lines = [
            {label: 'All', value: null},
            {label: 'Red', value: 'RD'},
            {label: 'Orange', value: 'OR'},
            {label: 'Silver', value: 'SV'},
            {label: 'Blue', value: 'BL'},
            {label: 'Yellow', value: 'YL'},
            {label: 'Green', value: 'GR'}
        ];
    }

    setClasses(line){
        switch(line) {
            case 'RD':
                return 'line-color-cell red';
            case 'OR':
                return 'line-color-cell orange';
            case 'SV':
                return 'line-color-cell silver';
            case 'BL':
                return 'line-color-cell blue';
            case 'YL':
                return 'line-color-cell yellow';
            case 'GR':
                return 'line-color-cell green';
        }
    }

    setTimeClass(time){
        if(time == 'BRD' || time == 'ARR'){
            return 'hide';
        }
        else{
            return 'show';
        }
    }

    setBoardingTextClass(time){
        if(time == 'BRD'){
            return 'boardingtext show';
        }
        else if(time == 'ARR'){
            return 'arrivingtext show';
        }
        else{
            return 'BoardingText hide';
        }
    }

    setBoardingIconClass(time){
        if(time == 'BRD'){
            return 'boardingicon show';
        }
        else if(time == 'ARR'){
            return 'arrivingicon show';
        }
        else{
            return 'boardingicon hide';
        }
    }

}
