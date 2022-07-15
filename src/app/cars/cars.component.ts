import { Component, OnInit } from '@angular/core';
import { CarModel } from './car-list/car-list-item/car-item.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  addedCars: CarModel[] = [];

  isVisible = false;

  constructor() {}

  ngOnInit(): void {
  }

  onToggle(){
    this.isVisible = !this.isVisible;
  }

  onAddCar(event){
    this.addedCars.push(event);
    this.onToggle();
  }
}
