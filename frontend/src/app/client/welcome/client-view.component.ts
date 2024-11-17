import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { FProduct } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';



@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  productService = inject(ProductService)

  searchForm = new FormGroup({
    search: new FormControl('')
  })

  form = new FormGroup({
    name: new FormControl({ value: '', disabled: true }, Validators.required),
    status: new FormControl({ value: '', disabled: true }, Validators.required),
    price: new FormControl({ value: '', disabled: true }, Validators.required),
    payment: new FormControl({ value: '', disabled: true }, Validators.required),
    id: new FormControl({ value: '', disabled: true }, Validators.required)   
})

    search(){
      const searchValue = this.searchForm.controls.search.value!
      this.productService.searchProductById(searchValue).subscribe((response: FProduct)=>{
      console.log(response)
      this.form.patchValue({
      name: response.name,
      status: response.status,
      price: response.price,
      payment: response.payment,
      id: response._id

      })
    })
  }
}
