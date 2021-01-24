import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { OrdersOrderListComponent } from './orders-order-list/orders-order-list.component';

@NgModule({
  declarations: [AuthComponent, AdminComponent, MovieListComponent, MovieFormComponent, CategoryListComponent, CategoryFormComponent, OrdersOrderListComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
  providers: [AuthGuard],
})
export class AdminModule {}
