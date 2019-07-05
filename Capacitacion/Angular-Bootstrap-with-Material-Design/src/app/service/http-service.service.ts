import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {

  }
  getNewRealeases(city,aux) {
      if(aux==false) return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f&units=metric`);
      else return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f&units=metric`);
  }

}

