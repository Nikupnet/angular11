import { Component, OnInit, Input } from '@angular/core';
import { MoviesResponse } from '../../models/Movies';
import { SearchMoviesService } from '../../services/searchmovies/searchmovies.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.scss']
})
export class SearchmoviesComponent implements OnInit {
  @Input() query = '';

  constructor(private searchMoviesService: SearchMoviesService, private route: ActivatedRoute) {
  }
  searchMoviesResponse: MoviesResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";


  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.searchMovies(params["searchquery"])
      })
  }

  searchMovies(value: string): void {
    this.searchMoviesService.getSearchMovies(this.query = value)
      .subscribe((data: MoviesResponse) => this.searchMoviesResponse = { ...data });
  }
}
