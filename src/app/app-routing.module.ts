import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'client', component: ClientComponent },
    { path: 'sale', component: SaleComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
