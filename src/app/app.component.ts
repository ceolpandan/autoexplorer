import { Component } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MegaMenuItem[];

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
            }]
    }
}
