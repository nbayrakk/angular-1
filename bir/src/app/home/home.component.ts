import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../sevices/category.service';
import { Category } from '../cat/category';
import { HomeService } from '../sevices/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeServices: HomeService) { }

  categories: Category[];
  ngOnInit(): void {
    this.homeServices.getCategories().subscribe(data => {
      this.categories = data
    })
    
  }

}
