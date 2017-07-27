import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  railPage = false;
  constructor(router: Router) { 
    router.events.subscribe((url:any) => { //add extra clsses to the footer based on the route
      let urlPath = router.url;
      if(urlPath !== '/rail'){
        this.railPage = true;
      }
      else{
        this.railPage = false;
      }
    });
  }
}
