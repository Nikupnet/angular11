import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MoviesResponse } from '../../models/Movies';

const baseURL1 = 'https://api.themoviedb.org/3/movie/';
const baseURL2 = '?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&region=ch&page=';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(query: string, page: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${baseURL1}${query}${baseURL2}${page}`);
  }
  getMoviesbyGenre(genreid: number, page: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`https://api.themoviedb.org/3/discover/movie?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreid}`);
  }
}
