import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Product, FProduct } from '../interfaces/product';
import { Observable } from 'rxjs';

const API_URL=`${environment.apiURL}/api`

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    http: HttpClient = inject(HttpClient)
  
  
  insertProduct(product: Product){
    return this.http.post<any>(`${API_URL}/products/`, product, {
      headers: { 'Content-Type': 'application/json' }});
  }


  searchProductById(id:string){
    return this.http.get<FProduct>(`${API_URL}/products/${id}`)
  }

  updateProductById(id: string, updatedProduct: Product) {
    return this.http.put<Product>(`${API_URL}/products/${id}`, updatedProduct);
  }

  DeleteProductById(id: string) {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }

  getAllProducts(){
    return this.http.get<any>(`${API_URL}/products/`)
  }
}
