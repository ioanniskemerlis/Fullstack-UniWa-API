import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { EProduct } from '../../shared/interfaces/product';

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
  @Output() product = new EventEmitter<EProduct>

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(0, [ Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    category: new FormControl('', Validators.required),
    stock: new FormControl(0, [ Validators.required,
      Validators.pattern('^[0-9]*$')
    ])
    })

    onSubmit(value:any){
      console.log(value);
      this.product.emit(value as EProduct)
      this.productForm.reset();
    }

}
