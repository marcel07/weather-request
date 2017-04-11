import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetCityWeatherService{
    private cityBaseUrl: string = 'api.openweathermap.org/data/2.5/forecast?q='
    private countryCodeUrl: string = 'https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code'

    city: string = '';

    constructor(public http: Http){}

    getCityWeather(){
        return this.http.get(this.cityBaseUrl)
    }

    getCountryCodes(): Promise<CountryCode[]>{
        return this.http.get(this.countryCodeUrl)
                .map(res => res.json())
                .toPromise();
    }
}

export interface CountryCode{
    alpha2Code: string;
}