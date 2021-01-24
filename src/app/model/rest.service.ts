import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Movie } from './movie.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {
  private baseUrl: string = 'http://localhost:3500';
  token: string;
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getCategories() {
    return this.httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(`${this.baseUrl}/orders`, order);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(`${this.baseUrl}/movies`, movie, {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.token}>`,
      }),
    });
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(
      `${this.baseUrl}/movies/${movie.id}`,
      movie,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer<${this.token}>`,
        }),
      }
    );
  }

  authentication(username: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<any>(`${this.baseUrl}/login`, {
        username: username,
        password: password,
      })
      .pipe(
        map((response) => {
          this.token = response.success ? response.token : null;
          console.log(this.token);
          return response.success;
        })
      );
  }
}
