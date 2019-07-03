
import { Injectable } from '@angular/core'

@Injectable()
export class WeatherServise {
    
    constructor() {
    }
    dato_json(city:String,aux:boolean) {
        let requestURL;
        if(aux==false) requestURL=`http://api.openweathermap.org/data/2.5/weather?q=${city},cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f&units=metric`;        
        else requestURL=`http://api.openweathermap.org/data/2.5/forecast?q=${city},cl,uk&APPID=a3803f4e13b97e469e7b590e8d24465f&units=metric`;        
        let request = new XMLHttpRequest();
        request.open("GET", requestURL);
        request.responseType = 'json';
        request.send();
        return request;
    };    
}