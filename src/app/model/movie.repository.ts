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

  getMovies(): Movie[] {
    return this.movies;
  }
}
