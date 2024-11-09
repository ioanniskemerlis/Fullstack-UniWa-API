
import { Component, EventEmitter, Output } from '@angular/core';
import { EProduct, ManyProduct } from '../../shared/interfaces/product';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
    @Output() productClicked = new EventEmitter<EProduct>();
    manyProduct = ManyProduct;

    sortOrder: EProduct = {
        name: 'none',
        description: 'none',
        price: 'none',
        category:'none',
        stock:'none'
    }

    sortData(sortKey: keyof EProduct ): void {
        if (this.sortOrder[sortKey]==='asc') {
            this.sortOrder[sortKey]='desc'
            this.manyProduct = sortBy(this.manyProduct,sortKey).reverse()
        } else {        // if (this.sortOrder[sortKey]==='asc')
            this.sortOrder[sortKey]='asc';
            this.manyProduct = sortBy(this.manyProduct,sortKey)
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
