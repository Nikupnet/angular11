import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../../models/Movie';

const baseURL1 = 'https://api.themoviedb.org/3/movie/';
const baseURL2 = '?api_key=cc93ac48875a099105b9238502f49a3a&language=de-DE&region=ch';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  imageBaseurl = 'https://image.tmdb.org/t/p/';

  constructor(private http: HttpClient) { }

  getMoviesDetail(movieid: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${baseURL1}${movieid}${baseURL2}`);
  }
}
