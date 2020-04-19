import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CatComponent } from './cat/cat.component';
import { ProdComponent } from './prod/prod.component';
import { BarComponent } from './bar/bar.component';
import {AddprodComponent} from './prod/addprod/addprod.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { InfoprodComponent } from './infoprod/infoprod.component';
import { CartSComponent } from './cart/cart-s/cart-s.component';
import { CommentComponent } from './comment/comment.component';
import { FilterPipe } from './prod/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatComponent,
    ProdComponent,
    BarComponent,
    AddprodComponent,
    InfoprodComponent,
    CartSComponent,
    CommentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
