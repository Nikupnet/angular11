import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MoviesResponse} from '../../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class PopMoviesService {

  constructor(private http: HttpClient) { }

  getPopMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>('https://api.themoviedb.org/3/movie/popular?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&page=1');
  }

}
