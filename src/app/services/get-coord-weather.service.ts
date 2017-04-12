import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WeatherOutput } from './interfaces';

const APP_KEY: string = '5ccfa36c30ce42ac6a6f48536ed2c0d2';


@Injectable()
export class GetLatLongWeatherService{
    private baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?';
    
    

    constructor(public http: Http){}

    
    // getCityWeather(city: string, countryCode: string){
    //     return this.http.get(this.baseUrl, {params: {
    //         q: city,countryCode,
    //         mode: "json"
    //         }
    //     })
    //     .map(res => )

    // }
    
    

    
}
 