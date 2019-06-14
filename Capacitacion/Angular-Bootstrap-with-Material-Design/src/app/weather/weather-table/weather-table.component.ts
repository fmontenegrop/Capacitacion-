import { Component, OnInit, Input } from '@angular/core';
import {WeatherServise}from '../../service/weather.service'
import { modalConfigDefaults } from 'angular-bootstrap-md/lib/modals/modal.options';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {

 @Input() weatherList: Array<any> = [];  
 constructor(private weatherS:WeatherServise) {     
}


  ngOnInit() {    
    
  };
  //Modal
  ver(){
    console.log(this.weatherS.getDat())
  }
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
  
  public chartClicked(e: any): void { };
  public chartHovered(e: any): void { };
  city_temp(city) {    
    const URL1 = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    const URL2 = ',cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f';    
    const dt = this.chartLabels;
    const temporal = this.lista;
    let time = this.weatherS.dato_json(URL1, city, URL2);
    time.onload =  () => {
      let h = time.response;
      for (var i = 0; i = dt.length; i++) {
        dt.pop();
      }      
      dt.push(h["list"][0].dt_txt);
      dt.push(h["list"][1].dt_txt);
      dt.push(h["list"][2].dt_txt);
      temporal.push({ data: [this.weatherS.com_temp(h["list"][0].main.temp), this.weatherS.com_temp(h["list"][1].main.temp), this.weatherS.com_temp(h["list"][2].main.temp)], label: "Temperatura: " + city });
    }    
    //Error 
    console.log(temporal[0].label);
    //Error
    this.chartDatasets = this.lista;
  }
  deleteList() {
    console.log(this.chartDatasets.length);
    while (this.chartDatasets[1] != null) {
      this.chartDatasets.pop();
    }
    this.lista = this.chartDatasets;
    if (this.lista[0] != null) {
      this.lista;
    }
    console.log(this.lista.length + " " + this.chartDatasets.length);
  }
  
}
