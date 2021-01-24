import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieRepository } from 'src/app/model/movie.repository';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  constructor(private movieRepository: MovieRepository) {}

  ngOnInit(): void {}

  getMovies(): Movie[] {
    return this.movieRepository.getMovies();
  }

  deleteProduct(movie: Movie): void {
    this.movieRepository.deleteMovie(movie);
  }
}
