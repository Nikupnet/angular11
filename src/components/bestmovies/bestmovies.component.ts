import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bestmovies',
  templateUrl: './bestmovies.component.html',
  styleUrls: ['./bestmovies.component.scss']
})
export class BestmoviesComponent implements OnInit {

  constructor(private bestMoviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";
  query = "top_rated";
  page = 1;

  ngOnInit(): void {
    this.bestMoviesService.getMovies(this.query = this.query, this.page = this.page)
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
  }
  goToNextPage(): void {
    this.page++;
    this.activatedRoute.queryParams.subscribe(params => {
      this.bestMoviesService.getMovies(this.query = this.query, this.page = this.page)
        .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
      window.scroll(0, 0);

    })
  }
}