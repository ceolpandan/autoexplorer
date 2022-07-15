import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MegaMenuItem} from 'primeng/api';
import { CarModel } from './cars/car-list/car-list-item/car-item.model';
import { CarService } from './cars/car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  fetchedCars: CarModel[];

  items: MegaMenuItem[];

  constructor(private route: ActivatedRoute){}

    ngOnInit() {
        this.items = [
            {
                label: 'Cars', 
                icon: 'pi pi-fw pi-car', 
                routerLink: ['/cars'], 
                // queryParams: {'recent': 'true'}
            },
            {
              label: 'Contact', 
              icon: 'pi pi-fw pi-phone', 
              routerLink: ['/contact'], 
              // queryParams: {'recent': 'true'}
      }
    ]
    }
    onAddCar(event){
      console.log(event);
    }
}
