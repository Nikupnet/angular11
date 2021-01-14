import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../../models/Movie';
import { MovieService } from '../../services/movie/movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {

  }

  movieResponse: MovieResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const movieid = params['movieid'];
      this.movieService.getMoviesDetail(movieid)
        .subscribe((data: MovieResponse) => this.movieResponse = { ...data });
    })
  }

}
