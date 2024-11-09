
import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
    {path:'app-products-list', component: ProductsListComponent },
    {path:'app-products-form', component: ProductFormComponent },
    {path:'welcome', component: WelcomeComponent},
    {path:'', redirectTo:'/welcome', pathMatch:'full'}
];
