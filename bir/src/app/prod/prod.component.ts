import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../sevices/product.service';
import {Product} from './product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { promisify } from 'util';
import { CartService } from '../sevices/cart.service';



@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css'],
  providers:[ProductService]
})
export class ProdComponent implements OnInit {

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private cartService:CartService) { }

  produtcs: Product [] ;
  
  addedProduct = "";
  text = "";
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(response=> {
      this.productService.getProduct(response["categoryId"]).subscribe(data => {
        this.produtcs = data
      })
    })

    
    
  }

  del(prod){
    this.productService.delProduct(prod).subscribe(data=>{
      alert(data+"silindi")
    })
    // this.cartService.removeFromCart(prod)

    setTimeout(() => {
      window.location.reload()
    }, 3000);
    // console.log(prod)

    
  }

  
  addToCart(prod){
    this.addedProduct = prod.name
    this.cartService.addToCart(prod)
    
  }
  // hide(){
  //   setTimeout(() => {
  //     $("#alert").hide();
  //   }, 2000);
  // }


}
