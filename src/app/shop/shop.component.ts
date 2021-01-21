import { Component } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Movie } from '../model/movie.model';
import { MovieRepository } from '../model/movie.repository';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles: [
    `
      .pt-100 {
        padding-top: 100px;
      }
    `,
  ],
})
export class ShopComponent {
  public selectedCategory: Category = null;

  constructor(
    private movieRepository: MovieRepository,
    private categoryRepository: CategoryRepository
  ) {}

  get movies(): Movie[] {
    return this.movieRepository.getMovies(this.selectedCategory?.id);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(category?: Category) {
    this.selectedCategory = category;
  }

  getStars(i: number) {
    return new Array(i);
  }
}
