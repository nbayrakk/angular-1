import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../prod/product';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  path = 'http://localhost:3000/product';

  getProduct(response): Observable<Product[]> {
    let newPath = this.path;
    if (response) {
      newPath += '?categoryId=' + response;
    }

    return this.http.get<Product[]>(newPath);
  }

  addProduct(product: Product): Observable<Product> {
    // const httpOptions = {

    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization': 'my-auth-token'
    //     })

    // }

    return this.http.post<Product>(this.path, product);
  }

  putProduct() {}
  delProduct(product: Product): Observable<Product> {
    this.path = this.path + '/' + product.id;

    return this.http.delete<Product>(this.path);
  }
  getItem(data):Observable<Product>{
    let newPath = this.path
    if(data) {
      newPath += '/' + data
    }
    // const httpOptions = {

    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       'Authorization': 'Token'
    //     })

    // }
return this.http.get<Product>(newPath);
  }
}
