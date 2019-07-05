import { Component, OnInit, Input } from '@angular/core';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private http:HttpServiceService) {
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
    const temporal: Array<any> = [];
    let time1=this.http.getNewRealeases(this.city,true);        
    time1.subscribe((data:any)=>{
      this.chartLabels=[];
      this.chartLabels.push(data.list[0].dt_txt);
      this.chartLabels.push(data.list[1].dt_txt);
      this.chartLabels.push(data.list[2].dt_txt);      
      temporal.push({data: [data.list[0].main.temp,data.list[1].main.temp,data.list[2].main.temp],label:`Temperatura ${this.city}`});
      this.chartDatasets=temporal;
    });

  }
}
