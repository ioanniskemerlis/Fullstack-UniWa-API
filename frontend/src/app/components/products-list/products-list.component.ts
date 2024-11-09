import { Component, Input, } from '@angular/core';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @Input() product: Product | undefined

}
