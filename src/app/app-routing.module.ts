import {NgModule} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { MetroComponent } from "app/metro/metro.component";
import { AboutComponent } from "app/about.component";
import { MapComponent } from "app/map.component";

const appRoutes: Routes =[
    {path: '', redirectTo: '/rail', pathMatch: 'full'},
    {path: 'rail', component: MetroComponent},
    {path: 'about', component: AboutComponent},
    {path: 'map', component: MapComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutungModule {

}