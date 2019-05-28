import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Lista de ciudades
    this.dat('bogota');
    this.dat('alaska');
    this.dat('new york');
    this.dat('tokyo');
    this.dat('paris');
    this.dat('london')
    //
  }
  weatherList: Array<any> = [
  ];
  dat(city) {
    var url2 = ',cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f'
    var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + url2;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = 'json';
    request.send();
    const p = this.weatherList;
    request.onload = weather;        
    function weather() {
      var h = request.response;
      var temp: number = h["main"].temp;            
      var speed=h["wind"].speed;
      var address=h["wind"].deg;
      var icon=h["weather"][0].icon;         
      icon="http://openweathermap.org/img/w/"+icon+".png"
      console.log(icon)
      p.push({ city: city, temp: com_temp(temp), speed: speed, address: address, icon: icon});
    };
    function com_temp(temp) {
      var resul = temp - 273.15;
      resul = Math.round(resul);
      return resul;
    }
  };

}
