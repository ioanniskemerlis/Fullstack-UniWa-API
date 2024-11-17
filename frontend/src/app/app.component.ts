import { environment } from '../environments/environment';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { NgIf } from '@angular/common';
import { CourierUpdateComponent } from './courier/welcome/courier-update.component';
import { ClientViewComponent } from './client/welcome/client-view.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent , CourierUpdateComponent, ClientViewComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'frontend';
  environment = environment; // Bind environment to make it accessible in the template
  // Determine which version is active
  isFullVersion = environment.version === 'full';
  isCourierVersion = environment.version === 'courier';
  isClientVersion = environment.version === 'client';
}