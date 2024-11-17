import { Component,inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { Product, FProduct } from '../../shared/interfaces/product';
import { ProductService } from '../../shared/services/product.service';



@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {

  productService = inject(ProductService)

  searchForm = new FormGroup({
    search: new FormControl('')
  })

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    courier: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    id: new FormControl
})
onSubmit(value: any){
  console.log(value);
  const id = this.searchForm.controls.search.value!
  const updatedProduct = this.form.value as Product
  this.productService.updateProductById(id, updatedProduct).subscribe({
      next: (response) => {
          console.log("Product updated >>", response)
          alert("PRODUCT UPDATED")
          
      },
      error: (error) => {
          console.log("There was a problem:", error);
      }
    })
  }

    onDelete(value:any){
      console.log(value);
  const id = this.searchForm.controls.search.value!
  this.productService.DeleteProductById(id).subscribe({
      next: (response) => {
          console.log("Product deleted >>", response)
          alert("PRODUCT DELETED")
          
      },
      error: (error) => {
          console.log("There was a problem:", error);
      }
    })
  }

    search(){
      const searchValue = this.searchForm.controls.search.value!
      this.productService.searchProductById(searchValue).subscribe((response: FProduct)=>{
      console.log(response)
      this.form.patchValue({
        name: response.name,
        status: response.status,
        courier: response.courier,
        category: response.category,
        price: response.price,
        payment: response.payment,
        address: response.address,
        id: response._id
      })
    })
  }
}
