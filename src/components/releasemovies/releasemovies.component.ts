import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-releasemovies',
  templateUrl: './releasemovies.component.html',
  styleUrls: ['./releasemovies.component.scss']
})
export class ReleasemoviesComponent implements OnInit {

  constructor(private releaseMoviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";
  query = "now_playing";
  page = 1;

  ngOnInit(): void {
    this.releaseMoviesService.getMovies(this.query = this.query, this.page = this.page)
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
  }
  goToNextPage(): void {
    this.page++;
    this.activatedRoute.queryParams.subscribe(params => {
      this.releaseMoviesService.getMovies(this.query = this.query, this.page = this.page)
        .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
      window.scroll(0, 0);

    })
  }


}