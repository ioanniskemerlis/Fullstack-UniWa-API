
import { Routes } from '@angular/router';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInsertComponent } from './components/product-insert/product-insert.component';

export const routes: Routes = [
    {path:'app-products-table', component: ProductsTableComponent },
    {path:'app-products-form', component: ProductFormComponent },
    {path:'app-list-group-menu', component: ListGroupMenuComponent},
    {path:'app-product-details', component: ProductDetailsComponent},
    {path:'app-product-insert', component: ProductInsertComponent},
    {path:'welcome', component: WelcomeComponent},
    {path:'', redirectTo:'/welcome', pathMatch:'full'}
];
