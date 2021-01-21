import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private baseUrl: string = 'http://localhost:3500';

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }
}
