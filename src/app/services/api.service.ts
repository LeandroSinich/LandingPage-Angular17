import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _httpClient = inject(HttpClient);

  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(this.urlBase);
  }
  getProductById(id: number): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.urlBase}/${id}`);
  }
}
