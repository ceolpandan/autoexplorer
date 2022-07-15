import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarModel } from '../car-list/car-list-item/car-item.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-add-new',
  templateUrl: './car-add-new.component.html',
  styleUrls: ['./car-add-new.component.css']
})
export class CarAddNewComponent implements OnInit {

  @Output() addCarEvent = new EventEmitter<CarModel>();

  carName: string = "";
  carId: string = "";

  engines = ['Petrol', 'Diesel', 'GPL']

  newCarForm: FormGroup;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.newCarForm = new FormGroup({
      'carName': new FormControl(null),
      'engine': new FormControl('Petrol')
    });
  }

  onSubmit(){
    let newCar = {name: this.newCarForm.value.carName, id: new Date().getDay()}
    this.addCarEvent.emit(newCar); 
  }

}
