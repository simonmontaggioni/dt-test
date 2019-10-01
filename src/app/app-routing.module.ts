import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { StoresComponent } from './components/stores/stores.component';
import { InventoriesComponent } from './components/inventories/inventories.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'inventories', component: InventoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
