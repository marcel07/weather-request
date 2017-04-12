import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CountryCode, WeatherOutput } from './interfaces';

const APP_KEY: string = '5ccfa36c30ce42ac6a6f48536ed2c0d2';

@Injectable()
export class GetCityWeatherService{
    private baseUrl: string = 'http://api.openweathermap.org/data/2.5/forecast?'
    private countryCodeUrl: string = 'https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code'

    city: string = '';

    constructor(public http: Http){}

    getCityWeather(){
        return this.http.get(this.baseUrl)
    }

    getCountryCodes(): Promise<CountryCode[]>{
        return this.http.get(this.countryCodeUrl)
                .map(res => res.json())
                .toPromise();
    }

    getCoordsWeather(lat: number, long: number): Promise<WeatherOutput[]>{

                   return this.http.get(this.baseUrl + 'lat=' + lat, {params: {
                       lon: long,
                       appid: APP_KEY
                   }
                   })
                    .map(res => res.json().list)
                    .toPromise();
    }

}




