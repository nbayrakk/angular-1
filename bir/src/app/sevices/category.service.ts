import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../cat/category';
@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) {

   }

   path = "http://localhost:3000/categories"
   
   getCategory():Observable<Category[]>{
     return this.http.get<Category[]>(this.path)
   }
}
