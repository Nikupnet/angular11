import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import {MoviesResponse} from '../../models/Movies';
import {SearchMoviesService} from '../../services/searchmovies/searchmovies.service';
import { NavbarComponent } from '../navbar/navbar.component'
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.scss']
})
export class SearchmoviesComponent implements OnInit {
  query = '';

  constructor(private searchMoviesService: SearchMoviesService, private route: ActivatedRoute) { 
  }
 searchMoviesResponse: MoviesResponse;
 posterpath = "https://image.tmdb.org/t/p/w500/";


 ngOnInit(): void {
  this.route  
  .queryParams
  .subscribe(params => {
    this.searchMovies( params["searchquery"]);
    console.log( params["searchquery"]);
  });



   
 }

 searchMovies(value: string): void {
  this.searchMoviesService.getSearchMovies(this.query = value)
       .subscribe((data: MoviesResponse) => this.searchMoviesResponse = { ...data});
 }
}
