import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    //Lista de ciudades
    this.dat('bogota');
    this.dat('alaska');
    this.dat('new york');
    this.dat('tokyo');
    this.dat('paris');
    this.dat('london');
    //this.pronostico("Temperatura");
    //        
  }
  weatherList: Array<any> = [
  ];

  dat(city) {
    const p = this.weatherList;
    var w = this.dato_json(city, 'http://api.openweathermap.org/data/2.5/weather?q=', ',cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f');
    w.onload = weather;
    function weather() {
      var h = w.response;
      var temp: number = h["main"].temp;
      var speed = h["wind"].speed;
      var address = h["wind"].deg;
      var icon = h["weather"][0].icon;
      icon = "http://openweathermap.org/img/w/" + icon + ".png"
      p.push({ city: city, temp: com_temp(temp), speed: speed, address: address, icon: icon });
    };
    function com_temp(temp) {
      var resul = temp - 273.15;
      resul = Math.round(resul);
      return resul;
    }
  };
  dato_json(city, url, url2) {
    var requestURL = url + city + url2;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = 'json';
    request.send();
    return request;
  }
  //Chart
  public chartType: string = 'line';
  public chartDatasets: Array<any> = [
    { data: [28, 48, 40], label: 'My Second dataset' },

  ];
  public lista: Array<any> = [

  ];
  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  city_temp(dat) {
    
    
    const dt = this.chartLabels;
    const temporal = this.lista;
    var time = this.dato_json(dat, 'http://api.openweathermap.org/data/2.5/forecast?q=', ',cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f');
    time.onload = function () {
      var h = time.response;
      for (var i = 0; i = dt.length; i++) {
        dt.pop();
      }
      dt.push(h["list"][0].dt_txt);
      dt.push(h["list"][1].dt_txt);
      dt.push(h["list"][2].dt_txt);
      temporal.push({ data: [com_temp(h["list"][0].main.temp), com_temp(h["list"][1].main.temp), com_temp(h["list"][2].main.temp)], label: "Temperatura: " + dat });
    }
    function com_temp(temp) {
      var resul = temp - 273.15;
      resul = Math.round(resul);
      return resul;
    }
    //Error 
    console.log(temporal[0].label);
    //Error
    this.chartDatasets = this.lista;
  }
  deleteList() {
    console.log(this.chartDatasets.length)
    while (this.chartDatasets[1] != null) {
      this.chartDatasets.pop();
    }    
    this.lista = this.chartDatasets;    
    if(this.lista[0]!=null){
      this.lista
    }
    console.log(this.lista.length + " " + this.chartDatasets.length)
  }
}
