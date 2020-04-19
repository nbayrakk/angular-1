import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../sevices/product.service';
import { Product } from '../prod/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../sevices/cart.service';

@Component({
  selector: 'app-infoprod',
  templateUrl: './infoprod.component.html',
  styleUrls: ['./infoprod.component.css'],
  providers: [ProductService],
})
export class InfoprodComponent implements OnInit {

  yeniYorum = "";
  

  constructor(
    private providerServe: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  product: Product;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.providerServe.getItem(data['id']).subscribe((response) => {
        this.product = response;
        console.log(this.product);
      });
    });
  }
  addToCart(product) {
    this.cartService.addToCart(product);
  }

  // yorumEkle(){
  //   this.urun.yorumlar.push({yorum:this.yeniYorum})
  // }
}
