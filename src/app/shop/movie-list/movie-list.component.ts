import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[] = [];
  constructor(private cart: Cart, private router: Router) {}

  ngOnInit(): void {}

  addMovieToCart(movie: Movie) {
    this.cart.addItem(movie);
    this.router.navigateByUrl('/cart');
  }

  getStars(i: number) {
    return new Array(i);
  }
}
