import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.model';
import { MovieRepository } from 'src/app/model/movie.repository';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  editing: boolean = false;
  movie: Movie = new Movie();

  constructor(
    private activeRoute: ActivatedRoute,
    private movieRepository: MovieRepository,
    private router: Router
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      let movieId = activeRoute.snapshot.params['id'];
      this.movie = this.movieRepository.getMovie(movieId);
    }
  }

  ngOnInit(): void {}

  save(form: NgForm): void {
    this.movieRepository.saveMovie(this.movie);
    this.router.navigateByUrl('/admin/main/movies');
  }
}
