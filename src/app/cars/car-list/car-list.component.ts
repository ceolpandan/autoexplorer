import { Component, OnInit } from '@angular/core';
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

  cars: CarModel[] = [];

  carsForPaginate: CarModel[] = [];
  currentPage = 1;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
      this.carService.getCars().subscribe(data => {
        for (let obj of data) {
          let car: CarModel = { id: obj['codigo'], name: obj['nome'] }
          this.cars.push(car)
        }
        this.cars.length = this.cars.length / 2 + 2;
        for (let i = 0; i < 12; i++)
          this.carsForPaginate.push(this.cars[i]);
      })
    this.carService.addCarEvent.subscribe(data => {
      this.cars.push(data)
    })
  }

  paginate(event) {
    this.carsForPaginate = [];
    for (let i = 0; i < event.rows; i++) {
      this.carsForPaginate.push(this.cars[event.first + i])
    }
  }

}
