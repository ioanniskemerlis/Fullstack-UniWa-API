import { Component, EventEmitter, Output,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { EProduct, Product } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  productService = inject(ProductService)


  @Output() product = new EventEmitter<EProduct>

  productForm = new FormGroup({
    "name": new FormControl('', Validators.required),
    "status": new FormControl('', Validators.required),
    "courier": new FormControl('', Validators.required),
    "category": new FormControl('', Validators.required),
    "price": new FormControl('', [ Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    "payment": new FormControl('', Validators.required),
    "address": new FormControl('', Validators.required),
    })

    onSubmit(value:any){
      console.log(value);
      this.product.emit(value as EProduct)
      const product = this.productForm.value as Product
      this.productService.insertProduct(product).subscribe({
        next: (response) => {
          this.productForm.reset();
          console.log("No errors, Product Created", response)
        },
        error: (error) =>{
          console.log("There was a Problem", error)
        }
       })
    }
}
