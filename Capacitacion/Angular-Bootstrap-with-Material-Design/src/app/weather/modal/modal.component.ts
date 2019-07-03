import { Component, OnInit, Input } from '@angular/core';
import { WeatherServise } from '../../service/weather.service'
import { Capability } from 'protractor';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private weatherS: WeatherServise) {
  }
  @Input() temp: String;
  @Input() city;
  ngOnInit() {
  }
  //Modal
  public chartType: string = 'line';
  public chartDatasets: Array<any> = [{}
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
  city_temp() {
    const dt = this.chartLabels;
    const temporal: Array<any> = [];
    let time = this.weatherS.dato_json(this.city, true);
    time.onload = () => {
      let h = time.response;
      for (var i = 0; i = dt.length; i++) {
        dt.pop();
      }
      dt.push(h["list"][0].dt_txt);
      dt.push(h["list"][1].dt_txt);
      dt.push(h["list"][2].dt_txt);
      temporal.push({ data: [h["list"][0].main.temp, h["list"][1].main.temp, h["list"][2].main.temp], label: "Temperatura: " + this.city });
      this.chartDatasets = temporal;
    }
  }
}
