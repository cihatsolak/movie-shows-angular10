import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { MovieRepository } from './movie.repository';
import { CategoryRepository } from './category.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestService,
    MovieRepository,
    CategoryRepository,
    Cart,
    Order,
    OrderRepository,
    AuthService,
  ],
})
export class ModelModule {}
