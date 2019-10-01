import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { SelectionBarComponent } from './components/selection-bar/selection-bar.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StoresComponent } from './components/stores/stores.component';
import { InventoriesComponent } from './components/inventories/inventories.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SelectionBarComponent,
    ItemDetailComponent,
    ProductsComponent,
    ProvidersComponent,
    ActionButtonsComponent,
    MessagesComponent,
    StoresComponent,
    InventoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
