import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    ShopComponent,
    NavbarComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    CategoryListComponent,
    MovieListComponent,
  ],
  exports: [ShopComponent, CartDetailComponent, CheckoutComponent],
})
export class ShopModule {}
