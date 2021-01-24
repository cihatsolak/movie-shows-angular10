import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'movies', component: MovieListComponent },
      { path: 'movies/:mode', component: MovieFormComponent },
      { path: 'movies/:mode/:id', component: MovieFormComponent },

      { path: 'categories/:mode/:id', component: CategoryFormComponent },
      { path: 'categories/:mode', component: CategoryFormComponent },
      { path: 'categories', component: CategoryListComponent },

      { path: 'orders', component: OrderListComponent },
    ],
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
