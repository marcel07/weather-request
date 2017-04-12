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
    displayLatLong = [];
    convertedDisplay: number[] = [];
    weatherGrid: any[] = [];
    finalTemp: WeatherOutput[] = [];
    lat: number = 0;
    lon: number = 0;

    

    
    constructor(private _cityWeatherService: GetCityWeatherService, private _getLangLongService: GetLatLongWeatherService) { }

    ngOnInit() { 
        this._cityWeatherService.getCountryCodes().then(data => this.countryCodes = data);
        
    }

    displayAndStoreData(){
        console.log("lat and long", this.lat, this.lon)
        this._cityWeatherService.getCoordsWeather(this.lat, this.lon).then(
            data => {
                this.displayLatLong = data;
                this.finalTemp = [];
                this.displayLatLong.forEach(data => this.finalTemp.push(data));
                console.log(this.finalTemp);
                
                this.finalTemp = this.finalTemp.splice(0, 10);

                this.weatherGrid = [];
                this.finalTemp.forEach(apiData => {
                    this.weatherGrid.push( this.getForecastFromApiData(apiData) );
                });

            }
        );
    
    }

    getForecastFromApiData(data): Forecast {

        return {
            date: data['dt_txt'],
            minTemp: Math.round(data['main']['temp_min'] - 273.15),
            maxTemp: Math.round(data['main']['temp_max'] - 273.15),
            avgTemp: Math.round(data['main']['temp'] - 273.15),
            humidity: Math.round(data['main']['humidity'] ),
            icon: data['weather'][0]['icon']
        };

    }
}
  
interface Forecast {
    date: string;
    minTemp: number;
    maxTemp: number;
    avgTemp: number;
    humidity: number;
    icon: string;
}
    
