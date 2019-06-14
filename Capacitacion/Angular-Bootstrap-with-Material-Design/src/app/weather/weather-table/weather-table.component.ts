import { Component, OnInit } from '@angular/core';
import {WeatherServise} from '../../service/weather.service'

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {

  weatherList: Array<any> = [
    
  ];

  constructor(private weatherS:WeatherServise) {
   
  }

  ngOnInit() {    
    //Lista de ciudades
    this.dat('bogota');
    this.dat('alaska');
    this.dat('new york');
    this.dat('tokyo');
    this.dat('paris');
    this.dat('london');     
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
