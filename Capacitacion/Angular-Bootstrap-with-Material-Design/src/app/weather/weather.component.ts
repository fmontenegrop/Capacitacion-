import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})



export class WeatherComponent implements OnInit {

  weatherList: Array<any> = [
    
  ];
 

  
  constructor(private service:HttpServiceService) {
   
  }

  ngOnInit() {    
    //Lista de ciudades
    this.datCity('cali');
    this.datCity('bogota');
    this.datCity('juneau');
    this.datCity('new york');
    this.datCity('tokyo');
    this.datCity('paris');    
    this.datCity('london');       
  };
  datCity(city:String){
    this.service.getNewRealeases(city,false).
    subscribe((data:any) =>{
      let temp=data.main.temp;
      let speed=data.wind.speed;
      let address=data.wind.deg;
      let icon=data.weather[0].icon
      icon=`http://openweathermap.org/img/w/${icon}.png`;
      this.weatherList.push({city: city, temp: temp, speed: speed, address: address, icon: icon});      
    });    
  }
  
  
}

