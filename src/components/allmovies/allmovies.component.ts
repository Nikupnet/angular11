import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { MoviesService } from '../../services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {

  }

  moviesResponse: MoviesResponse;
  query = "top_rated";
  page = 1;


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if ("genreid" in params) {
        const genreid = params['genreid'];
        this.moviesService.getMoviesbyGenre(genreid, this.page = this.page)
          .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
      } else {
        this.moviesService.getMovies(this.query = this.query, this.page = this.page)
          .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
      }
    })
  }

  goToNextPage(): void {
    this.page++;

    console.log(this.page);
    this.activatedRoute.queryParams.subscribe(params => {
      if ("genreid" in params) {
        const genreid = params['genreid'];
        this.moviesService.getMoviesbyGenre(genreid, this.page = this.page)
          .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
      } else {
        this.moviesService.getMovies(this.query = this.query, this.page = this.page)
          .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data });
      }
      window.scroll(0, 0);
    })
  }

}