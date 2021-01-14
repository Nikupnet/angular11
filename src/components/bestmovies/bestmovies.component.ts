import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-bestmovies',
  templateUrl: './bestmovies.component.html',
  styleUrls: ['./bestmovies.component.scss']
})
export class BestmoviesComponent implements OnInit {

  constructor(private bestMoviesService: MoviesService) {
  }

  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";
  query = "top_rated";

  ngOnInit(): void {
    this.bestMoviesService.getMovies(this.query = this.query)
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
  }

}