import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MegaMenuModule } from 'primeng/megamenu';
import { CarsComponent } from './cars/cars.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarListItemComponent } from './cars/car-list/car-list-item/car-list-item.component';
import { CarAddNewComponent } from './cars/car-add-new/car-add-new.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';

import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarListComponent,
    CarListItemComponent,
    CarAddNewComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    PaginatorModule,
    ReactiveFormsModule,
    ChipModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
