import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MoviesResponse, Result} from '../../models/Movies';


@Injectable({
  providedIn: 'root'
})
export class FavMoviesService {

  constructor(private http: HttpClient) { }

  isFavorite(movieId: number): Observable<boolean>{
    return this.http.get<boolean>(`http://localhost:3000/favorites/${movieId}`);
  }

  getFavMovies(): Observable<Array<Result>> {
    return this.http.get<Array<Result>>('http://localhost:3000/favorites');
  }

  addToFavorite(movie: MoviesResponse): Observable<any> {
    return this.http.post('http://localhost:3000/favorite', movie);
  }

  public deleteFavorite(movie: Result): Observable<any> {
    const url = 'http://localhost:3000/favorite/' + movie.id;
    return this.http.delete(url);
  }


}
