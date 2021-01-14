import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-releasemovies',
  templateUrl: './releasemovies.component.html',
  styleUrls: ['./releasemovies.component.scss']
})
export class ReleasemoviesComponent implements OnInit {

  constructor(private releaseMoviesService: MoviesService) {
  }

  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";
  query = "now_playing";

  ngOnInit(): void {
    this.releaseMoviesService.getMovies(this.query = this.query)
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
  }

}