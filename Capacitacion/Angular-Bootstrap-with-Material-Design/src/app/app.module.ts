import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { WeatherTableComponent } from './weather/weather-table/weather-table.component';
import { ModalComponent } from './weather/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    
    WeatherComponent,
    
    HeaderComponent,
    
    WeatherTableComponent,
    
    ModalComponent,
    
              
  ],
  imports: [
    HttpClientModule,
    BrowserModule,        
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
