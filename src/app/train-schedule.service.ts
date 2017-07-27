import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TrainScheduleService {
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('assets/cars-small.json')
                    .toPromise()
                    .then(res => <Train[]> res.json().data)
                    .then(data => { return data; });
    }

}