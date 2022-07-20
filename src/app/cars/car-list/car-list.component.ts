import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { CarModel } from './car-list-item/car-item.model';

import { pipe, map } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input() addedCars = [];
  cars: CarModel[] = [];

  carsForPaginate: CarModel[] = [];
  currentPage = 1;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
      this.carService.getCars().subscribe(data => {
        for (let obj of data) {
          let car: CarModel = { id: obj['codigo'], name: obj['nome'] }
          this.cars.push(car)
        }

        this.cars.length = this.cars.length / 2 + 2;

        if(this.addedCars.length > 0){
          for(let car of this.addedCars){
            this.cars.push(car)
          }
        }

        for(let i=0; i<12; i++){
          this.carsForPaginate.push(this.cars[i])
        }
      })
  }

  paginate(event) {
    this.carsForPaginate = [];
    for (let i = 0; i < event.rows; i++) {
      this.carsForPaginate.push(this.cars[event.first + i])
    }
  }

}
