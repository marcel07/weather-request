import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WeatherOutput } from './interfaces';

const API_KEY: string = '5ccfa36c30ce42ac6a6f48536ed2c0d2';


@Injectable()
export class GetLatLongWeatherService{
    private latLongBaseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?';
    
    lat: number = 35;
    long: number = 139;

    constructor(public http: Http){}

    getCoordsWeather(): Promise<WeatherOutput[]>{

        return this.http.get(this.latLongBaseUrl + 'lat=' + this.lat + '&lon=' + this.long + '&APPID=' + API_KEY)
                    .map(res => res.json())
                    .toPromise();
    }
}
 