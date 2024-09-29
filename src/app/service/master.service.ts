import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/product';

@Injectable({
  providedIn: 'root',
})
// https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts
// https://fakestoreapi.com/products
export class MasterService {
  apiURL: string = 'https://freeapi.miniprojectideas.com/api/BigBasket/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiURL + 'GetAllProducts');
  }
  getAllCategory(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiURL + 'GetAllCategory');
  }
  getAllProductsByCategoryId(categoryId: number): Observable<APIResponseModel> {
    const url = `${this.apiURL}GetAllProductsByCategoryId?id=${categoryId}`;
    return this.http.get<APIResponseModel>(url);
  }
}
