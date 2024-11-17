
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { EProduct, Product } from '../../shared/interfaces/product';
import { sortBy } from 'lodash-es';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent implements OnInit {
    productService = inject(ProductService)


        products: Product[] = [];
      
      
        ngOnInit(): void {
          // Fetch all products on component initialization
        
          this.productService.getAllProducts().subscribe(
            (data: Product[]) => {
              this.products = data;
    
            },
            (error) => {
              console.error('Error fetching products:', error);
            }
          );
        }
        
    @Output() productClicked = new EventEmitter<EProduct>();
    

    sortOrder: EProduct = {
        name: 'none',
        status: 'none',
        courier: 'none',
        category: 'none',
        price:'none',
        payment:'none',
        address: 'none'
    }

    sortData(sortKey: keyof EProduct ): void {
        if (this.sortOrder[sortKey]==='asc') {
            this.sortOrder[sortKey]='desc'
            this.products = sortBy(this.products,sortKey).reverse()
        } else {        // if (this.sortOrder[sortKey]==='asc')
            this.sortOrder[sortKey]='asc';
            this.products = sortBy(this.products,sortKey)
        }
    }
    sortSign(sortKey: keyof EProduct): string {
        if (this.sortOrder[sortKey] ==='asc')
            return '&uarr;'
        else if (this.sortOrder[sortKey] === 'desc')
            return '&darr;'
        else return ''
    }

    onProductClick(product: EProduct){
        console.log(product);
        this.productClicked.emit(product)
    }
}
