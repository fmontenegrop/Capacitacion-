import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {  
  @Input() weatherList: Array<any> = [];
  constructor() {
  }
  ngOnInit() {

  };


}
