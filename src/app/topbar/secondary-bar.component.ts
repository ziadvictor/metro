import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-secondary-bar',
  templateUrl: './secondary-bar.component.html',
  styleUrls: ['./secondary-bar.component.css']
})
export class SecondaryBarComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Rail',
              icon: 'fa-subway',
              routerLink: '/rail'
          },
          {
              label: 'Map',
              icon: 'fa-map-o',
              routerLink: 'map'
          },
          {
              label: 'About',
              icon: 'fa-info-circle',
              routerLink: 'about'
          }
      ];
  }

}
