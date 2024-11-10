import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Product } from '../interfaces/product';

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
}
