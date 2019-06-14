import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import {WeatherTableComponent} from './weather-table/weather-table.component';
import {WeatherServise} from '../service/weather.service';
import { modalConfigDefaults } from 'angular-bootstrap-md/lib/modals/modal.options';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})



export class WeatherComponent implements OnInit {

  weatherList: Array<any> = [
    
  ];

  
  constructor(private weatherS:WeatherServise) {
   
  }

  ngOnInit() {    
    //Lista de ciudades
    this.dat('bogota');
    this.dat('juneau');
    this.dat('new york');
    this.dat('tokyo');
    this.dat('paris');    
    this.dat('london');   
    console.log(this.weatherList)  ;
  };
  
  dat(city) {        
    const URL1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const URL2 = ',cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f';
    const p = this.weatherList;
    let w = this.weatherS.dato_json(URL1,city,URL2);    
    w.onload = ()=> {
      let h = w.response;      
      let temp: number = h["main"].temp;
      let speed = h["wind"].speed;
      let address = h["wind"].deg;
      let icon = h["weather"][0].icon;
      icon=`http://openweathermap.org/img/w/${icon}.png`;     
      p.push({ city: city, temp: this.weatherS.com_temp(temp), speed: speed, address: address, icon: icon });
    };     
  };
  
  
  
}

