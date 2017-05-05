import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


//DECLARAR LOS MODULOS PARA QUE FUNCIONE NGPRIME
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {CarroServices} from "./services/carro.services";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule
  ],
  providers: [CarroServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
