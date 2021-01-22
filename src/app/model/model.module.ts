import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { MovieRepository } from './movie.repository';
import { CategoryRepository } from './category.repository';
import { Cart } from './cart.model';
@NgModule({
  imports: [HttpClientModule],
  providers: [RestService, MovieRepository, CategoryRepository, Cart],
})
export class ModelModule {}
