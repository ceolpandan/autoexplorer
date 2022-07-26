import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './car-list/car-list-item/car-item.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  carsURL ='https://parallelum.com.br/fipe/api/v1/carros/marcas'

  constructor(private http: HttpClient, private router: Router) { }

  getCars(){
    let data = this.http.get<CarModel[]>(this.carsURL);
    return data;
  }
}
