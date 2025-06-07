import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private readonly http=inject(HttpClient);
  getAllProduct():Observable<any>
  {
    return this.http.get(`https://flower.elevateegy.com/api/v1/products`)
  }
}
