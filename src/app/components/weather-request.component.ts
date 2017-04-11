import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { GetCityWeatherService } from './../services/get-city-weather.service';
import { GetLatLongWeatherService } from './../services/get-coord-weather.service';
import { WeatherOutput, CountryCode} from './../services/interfaces';

@Component({
    selector: 'weather-request',
    templateUrl: 'weather-request.component.html',
    styleUrls: ['weather-request.component.css'],
    providers: [GetCityWeatherService, GetLatLongWeatherService]
})

export class WeatherRequestComponent implements OnInit {
    countryCodes: CountryCode[] = [];
    latLongOutput: WeatherOutput[] = [];
    displayLatLong = [];
    convertedDisplay: number[] = []

    
    constructor(private _getCityWeather: GetCityWeatherService, private _getLangLongService: GetLatLongWeatherService) { }

    ngOnInit() { 
        this._getCityWeather.getCountryCodes().then(codes => this.countryCodes = codes);
    }

    getLatLong(){
        this._getLangLongService.getCoordsWeather().then(latLong => this.latLongOutput = latLong);
        if(this.latLongOutput['list']){
            this.displayLatLong = this.latLongOutput['list'][0]['main'];
        }
    }

    convertToCelcius(){
        this.convertedDisplay = [this.displayLatLong['temp'] - 273];

        console.log(this.convertedDisplay);
    }
}