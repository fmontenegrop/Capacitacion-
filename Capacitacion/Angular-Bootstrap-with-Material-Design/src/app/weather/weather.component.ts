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
    this.dat('london');
    //this.pronostico("Temperatura");
    //        
  }
  weatherList: Array<any> = [
  ];

  dat(city) {
    const p = this.weatherList;
    var w = this.dato_json(city);
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
  dato_json(city) {
    var url2 = ',cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f'
    var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + url2;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = 'json';
    request.send();
    return request;
  }
  //Chart
  public chartType: string = 'line';
  public chartDatasets: Array<any> = [
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];
  public lista: Array<any> = [

  ];
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May'];

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
  pronostico(dato) {
    this.lista.push({ data: [28, 48, 40, 19, 86, 27, 90], label: dato })
    this.chartDatasets = this.lista;
  }
  city(dat) {
    alert(dat);
  }
  
}
