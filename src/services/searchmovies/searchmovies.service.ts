import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {MoviesResponse} from '../../models/Movies';


const baseURL1 = 'https://api.themoviedb.org/3/search/movie?api_key=cc93ac48875a099105b9238502f49a3a&query=';
const baseURL2 = '&language=de-CH&page=1';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {
  public query = ''

  constructor(private http: HttpClient) { }

    getSearchMovies(searchquery: string): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${baseURL1}${searchquery}${baseURL2}`);
  }

}