import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutungModule } from "app/app-routing.module";

import { AppComponent } from './app.component';

import { InputTextModule, 
        ButtonModule, 
        TooltipModule, 
        DropdownModule, 
        DataTableModule, 
        SharedModule,
        GrowlModule,
        MenubarModule,
        GMapModule}  from 'primeng/primeng';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MetroComponent } from './metro/metro.component';
import { ColorsComponent } from './metro/colors.component';
import { StationsComponent } from './metro/stations.component';
import { StationInfoComponent } from './metro/station-info.component';
import { StationsService } from "app/stations.service";
import { SecondaryBarComponent } from './topbar/secondary-bar.component';
import { AboutComponent } from './about.component';
import { MapComponent } from './map.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    MetroComponent,
    ColorsComponent,
    StationsComponent,
    StationInfoComponent,
    SecondaryBarComponent,
    AboutComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutungModule,
    InputTextModule, 
    ButtonModule,
    TooltipModule,
    DropdownModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    MenubarModule,
    GMapModule
  ],
  providers: [StationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
