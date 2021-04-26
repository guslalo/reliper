import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private categoryUrl = 'app_catalog/api/category/';
  private productsUrl = 'app_catalog/api/product/';

  constructor(private http: HttpClient) { }

  getCategories(params: any = null): Observable<any> {
    return this.http.get<any>(environment.baseUrl + this.categoryUrl,  {params: params});
  }

  getProducts(params: any = null): Observable<any> {

    return this.http.get<any>(environment.baseUrl + this.productsUrl, {params: params});
  
  }

  searchProducts(search:any): Observable<any> {
      
      return this.http.get<any>(environment.baseUrl + this.productsUrl + 
        '?search='+ search,
        );
    }
}
