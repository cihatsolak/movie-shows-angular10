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
  public moviesPerPageCount: number = 3; //pageCount
  public selectedPageIndex: number = 1; //pageIndex

  constructor(
    private movieRepository: MovieRepository,
    private categoryRepository: CategoryRepository
  ) {}

  get movies(): Movie[] {
    let index = (this.selectedPageIndex - 1) * this.moviesPerPageCount;
    let count = index + this.moviesPerPageCount;
    return this.movieRepository
      .getMovies(this.selectedCategory?.id)
      .slice(index, count);
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

  changePage(index: number) {
    this.selectedPageIndex = index;
  }

  get pageNumbers(): number[] {
    let count = Math.ceil(
      this.movieRepository.getMovies(this.selectedCategory?.id).length /
        this.moviesPerPageCount
    );

    return Array(count)
      .fill(0)
      .map((item, index) => index + 1);
  }
}
