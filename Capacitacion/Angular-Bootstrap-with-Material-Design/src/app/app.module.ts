import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {WeatherServise}from './service/weather.service'

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { WeatherTableComponent } from './weather/weather-table/weather-table.component';
import { ModalComponent } from './weather/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    
    WeatherComponent,
    
    HeaderComponent,
    
    WeatherTableComponent,
    
    ModalComponent,
              
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    WeatherServise,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
