import { Injectable, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { RestService } from './rest.service';

@Injectable()
export class MovieRepository implements OnInit {
  private movies: Movie[] = [];

  constructor(private restService: RestService) {
    this.restService.getMovies().subscribe((response) => {
      this.movies = response;
    });
  }

  ngOnInit(): void {}

  getMovie(id: number): Movie {
    return this.movies.find((p) => p.id == id);
  }

  getMovies(categoryId: number = null): Movie[] {
    if (categoryId == null) {
      return this.movies;
    }

    return this.movies.filter((item) => item.categoryId == categoryId);
  }

  saveMovie(movie: Movie) {
    if (movie.id == null || movie.id == 0) {
      this.restService.addMovie(movie).subscribe((response) => {
        this.movies.push(movie);
      });
    } else {
      this.restService.updateMovie(movie).subscribe((response) => {
        this.movies.splice(
          this.movies.findIndex((p) => p.id == movie.id),
          1,
          movie
        );
      });
    }
  }

  deleteMovie(movie: Movie): void {
    this.restService.deleteMovie(movie).subscribe((response) => {
      let index = this.movies.findIndex((p) => p.id == movie.id);
      this.movies.splice(index, 1);
    });
  }
}
