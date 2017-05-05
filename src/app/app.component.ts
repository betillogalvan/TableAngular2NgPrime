import { Component,OnInit } from '@angular/core';

import {ICarro} from './shared/carros';

import {CarroServices} from './services/carro.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tablas NG PRIME';

  public clist: ICarro[];

  constructor(private _carroServices: CarroServices){}

  getCarrosList(){
    this._carroServices.getCarrosList().subscribe(clist=>{this.clist= clist});
  }

  ngOnInit(){
    this.getCarrosList()
  }




}
