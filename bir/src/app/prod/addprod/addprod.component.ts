import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/sevices/category.service';
import { ProductService } from 'src/app/sevices/product.service';
import { Category } from 'src/app/cat/category';
import { Product } from '../product';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css'],
  providers: [CategoryService, ProductService],
})
export class AddprodComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  addProductForm: FormGroup;
  categories: Category[];
  product: Product = new Product();

  createProductAddForm() {
    this.addProductForm = this.fb.group({
      name: ["", Validators.required],
      desc: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.createProductAddForm();
    this.categoryService.getCategory().subscribe((data) => {
      this.categories = data;
    });
  }

  add() {
    if (this.addProductForm.valid) {
      this.product = Object.assign({}, this.addProductForm.value);
    }

    this.productService.addProduct(this.product).subscribe(data=> {
      alert(data + "başarıyla eklendi")
    })
    
    if(this.addProductForm) {
      
      setTimeout(() => {
        window.location.reload()
      }, 2000);
      
    }
    

    
  }

  
}
