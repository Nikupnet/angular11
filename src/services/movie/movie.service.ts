import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MovieResponse} from '../../models/Movie';



const baseURL1 = 'https://api.themoviedb.org/3/movie/';
const baseURL2 = '?api_key=cc93ac48875a099105b9238502f49a3a&language=de-CH';
const baseURL3 = '550';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '?api_key=1bded0cf5ec81699b719a0ab217e461e';
  private apiUrl = 'https://api.themoviedb.org/';
  imageBaseurl = 'https://image.tmdb.org/t/p/';

  private test = 'https://api.themoviedb.org/3/movie/550?api_key=cc93ac48875a099105b9238502f49a3a&language=en-US';
  constructor(private http: HttpClient) { }


  getMoviesDetail(movieid: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${baseURL1}${movieid}${baseURL2}`);
  }
}
