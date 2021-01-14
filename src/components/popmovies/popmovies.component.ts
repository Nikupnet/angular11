import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-popmovies',
  templateUrl: './popmovies.component.html',
  styleUrls: ['./popmovies.component.scss']
})

export class PopmoviesComponent implements OnInit {

  constructor(private popMoviesService: MoviesService) {
  }
  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";
  query = "popular";

  ngOnInit(): void {
    this.popMoviesService.getMovies(this.query = this.query)
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
  }

}
