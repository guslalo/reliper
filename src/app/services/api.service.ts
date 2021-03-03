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

  getCategories(id?): Observable<any> {
  
    if(id){ 
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token 9c7f98ae739a61ba50d497014695e954ea5e5049'
        }),
      };
      return this.http.get<any>(environment.baseUrl + this.categoryUrl + id, httpOptions );
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token 9c7f98ae739a61ba50d497014695e954ea5e5049'
        }),
      };
      return this.http.get<any>(environment.baseUrl + this.categoryUrl, httpOptions );
    }
  }


  getProducts(categories_id?, id? ): Observable<any> {
    if(categories_id) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token 9c7f98ae739a61ba50d497014695e954ea5e5049'
        })
      };
      return this.http.get<any>(environment.baseUrl + this.productsUrl + '?&categories__id='+ categories_id, httpOptions);
    }
    if(id){
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token 9c7f98ae739a61ba50d497014695e954ea5e5049'
        }),
      };
      return this.http.get<any>(environment.baseUrl + this.productsUrl + id, httpOptions )
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Token 9c7f98ae739a61ba50d497014695e954ea5e5049'
        }),
      };
      return this.http.get<any>(environment.baseUrl + this.productsUrl, httpOptions );
    }
  
  }

}
