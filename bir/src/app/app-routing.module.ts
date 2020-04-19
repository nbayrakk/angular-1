import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { ProdComponent } from './prod/prod.component';
import { HomeComponent } from './home/home.component';
import { AddprodComponent } from './prod/addprod/addprod.component';
import { InfoprodComponent } from './infoprod/infoprod.component';


const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'product', component:ProdComponent},
    {path:'product/category/:categoryId', component:ProdComponent},
    {path:'kayit', component:AddprodComponent},
    {path:'product/:id', component:InfoprodComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
