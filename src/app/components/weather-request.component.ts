import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CountryCode, GetCityWeatherService} from './../services/get-weather.service';

@Component({
    selector: 'weather-request',
    templateUrl: 'weather-request.component.html',
    styleUrls: ['weather-request.component.css'],
    providers: [GetCityWeatherService]
})

export class WeatherRequestComponent implements OnInit {
    countryCodes: CountryCode[] = [];
    
    constructor(private _getWeather: GetCityWeatherService) { }

    ngOnInit() { 
        this._getWeather.getCountryCodes()
                        .then(codes => this.countryCodes = codes)
    }
}