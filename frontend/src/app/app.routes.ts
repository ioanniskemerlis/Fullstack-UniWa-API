
import { environment } from '../environments/environment';

//Company routes
import { Routes } from '@angular/router';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductInsertComponent } from './components/product-insert/product-insert.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

//courier routes
import { CourierUpdateComponent } from './courier/welcome/courier-update.component';

//client routes
import { ClientViewComponent } from './client/welcome/client-view.component';

const routes: Routes = [
    {path:'app-products-table', component: ProductsTableComponent },
    {path:'app-products-form', component: ProductFormComponent },
    {path:'app-list-group-menu', component: ListGroupMenuComponent},
    {path:'app-product-details', component: ProductDetailsComponent},
    {path:'app-product-insert', component: ProductInsertComponent},
    {path:'app-products-update', component: ProductUpdateComponent},
    {path:'welcome', component: WelcomeComponent},
    {path:'', redirectTo:'/welcome', pathMatch:'full'}
];

const courierroutes: Routes = [
    { path: 'courier-app-welcome', component: CourierUpdateComponent }
    
  ];

const clientroutes: Routes = [
    { path: 'app-client-view', component: ClientViewComponent }
    
  ];

export const appRoutes: Routes = environment.version === 'full' ? routes : courierroutes;  