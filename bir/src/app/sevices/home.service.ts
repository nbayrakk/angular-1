import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Category } from '../cat/category';
import { Observable } from 'rxjs';
@Injectable()
export class HomeService {

  constructor(private http:HttpClient) {

   }


   path = "http://localhost:3000/categories"

   getCategories():Observable<Category[]> {

     return this.http.get<Category[]>(this.path)
   }
}
