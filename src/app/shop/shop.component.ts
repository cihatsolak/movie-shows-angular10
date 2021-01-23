import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Movie } from '../model/movie.model';
import { MovieRepository } from '../model/movie.repository';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
})
export class ShopComponent {
  public selectedCategory: Category = null;
  public moviesPerPageCount: number = 6; //pageCount
  public selectedPageIndex: number = 1; //pageIndex
  public selectedMovies: Movie[] = [];

  constructor(private movieRepository: MovieRepository) {}

  get movies(): Movie[] {
    let index = (this.selectedPageIndex - 1) * this.moviesPerPageCount;
    let count = index + this.moviesPerPageCount;

    this.selectedMovies = this.movieRepository.getMovies(
      this.selectedCategory?.id
    );

    return this.selectedMovies.slice(index, count);
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

  changePageSize(size: number) {
    this.moviesPerPageCount = size;
  }

  getCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
