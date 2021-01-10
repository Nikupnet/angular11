import { Component, OnInit } from '@angular/core';
import {MoviesResponse} from '../../models/Movies';
import {PopMoviesService} from '../../services/popmovies/popmovies.service';

@Component({
  selector: 'app-popmovies',
  templateUrl: './popmovies.component.html',
  styleUrls: ['./popmovies.component.scss']
})
export class PopmoviesComponent implements OnInit {

  constructor(private popMoviesService: PopMoviesService) {
   }
   moviesResponse: MoviesResponse;
   posterpath = "https://image.tmdb.org/t/p/w500/";
   


  ngOnInit(): void {
    this.popMoviesService.getPopMovies()
    .subscribe((data: MoviesResponse) => this.moviesResponse = { ...data});
  }

}
