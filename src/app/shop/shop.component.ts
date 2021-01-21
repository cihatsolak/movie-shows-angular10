import { Component } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Movie } from '../model/movie.model';
import { MovieRepository } from '../model/movie.repository';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
})
export class ShopComponent {
  constructor(
    private movieRepository: MovieRepository,
    private categoryRepository: CategoryRepository
  ) {}

  get movies(): Movie[] {
    return this.movieRepository.getMovies();
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
}
