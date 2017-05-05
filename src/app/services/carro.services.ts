import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {ICarro} from '../shared/carros';


import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class CarroServices{
  constructor(private  _http:Http){}

  getCarrosList():Observable<ICarro[]>{
    return this._http.get('api/carros.json').map((response:Response)=> <ICarro[]>response.json());
  }


}
