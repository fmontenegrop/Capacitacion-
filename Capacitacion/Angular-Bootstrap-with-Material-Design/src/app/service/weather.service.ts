
import { Injectable } from '@angular/core'

@Injectable()
export class WeatherServise {
    private dat: String[
        
    ];
    constructor() {        
    } 

    dato_json(url, city, url2) {
        let requestURL = url + city + url2;
        let request = new XMLHttpRequest();
        request.open("GET", requestURL);
        request.responseType = 'json';
        request.send();
        return request;
    };
    com_temp=(temp) => {
        let resul = temp - 273.15;
        resul = Math.round(resul);
        return resul;
      };
    setDat(dato: Array <any>){
        this.dat=dato;        
    };
    getDat(){        
        return this.dat;
    };

}