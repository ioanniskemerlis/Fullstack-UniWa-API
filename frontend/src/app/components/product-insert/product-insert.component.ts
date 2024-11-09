import { Component } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { EProduct, ManyProduct } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-insert',
  standalone: true,
  imports: [ProductFormComponent, ProductsTableComponent, ProductDetailsComponent],
  templateUrl: './product-insert.component.html',
  styleUrl: './product-insert.component.css'
})
export class ProductInsertComponent {
  currentProduct : EProduct | undefined;

    onProduct(product: EProduct){
      console.log("Parent>>>", product);
      this.currentProduct = product;
      ManyProduct.push(product);
    }
}
