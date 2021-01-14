import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popmovies',
  templateUrl: './popmovies.component.html',
  styleUrls: ['./popmovies.component.scss']
})

export class PopmoviesComponent implements OnInit {

  constructor(private popMoviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }
  moviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";
  query = "popular";
  page = 1;


  ngOnInit(): void {
    this.popMoviesService.getMovies(this.query = this.query, this.page = this.page)
      .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
  }

  goToNextPage(): void {
    this.page++;
    this.activatedRoute.queryParams.subscribe(params => {
        this.popMoviesService.getMovies(this.query = this.query, this.page = this.page)
          .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
          window.scroll(0,0);

      })
    }

}
