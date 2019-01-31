import { Injectable, Inject } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private _http:HttpClient;

  constructor(@Inject(HttpClient) _htt) {
    this._http = _htt;
   }

   getCustomers():Observable<Response>{
    return this._http.get('https://api.myjson.com/bins/1gxz34')
                     .pipe(map((response:any) => response));
  }
}
