import { Component, Input } from '@angular/core';
import { Product, EProduct } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
    @Input() product: Product | undefined
    @Input() eproduct: EProduct | undefined
}