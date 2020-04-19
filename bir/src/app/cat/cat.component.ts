import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../sevices/category.service';
import { Category } from './category';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  providers: [CategoryService]
})
export class CatComponent implements OnInit {

  constructor(private categoryService:CategoryService ) { }

  categories: Category [];
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data=> {
      this.categories = data
      
    })
    
  }


}
