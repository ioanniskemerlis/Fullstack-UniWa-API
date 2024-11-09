import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { text } from 'express';
import { MenuEntry } from '../../shared/interfaces/menu-entry';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu: MenuEntry[] = [
    { text: "Εισαγωγή Προϊόντος", routerLink: "app-product-insert"},
    { text: "Λίστα Προϊόντων", routerLink: "app-products-list"}
  ]

}
