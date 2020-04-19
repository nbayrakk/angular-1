import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../sevices/category.service';
import { Category } from '../cat/category';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers: [CategoryService]
})
export class BarComponent implements OnInit {

  constructor(private categoryService:CategoryService ) { }

  categories: Category [];
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data=> {
      this.categories = data
    })
    
  }
}
