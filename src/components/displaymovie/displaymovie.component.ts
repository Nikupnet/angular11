import {MoviesResponse} from '../../models/Movies';
import { Router } from '@angular/router';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FavMoviesResponse, Result} from '../../models/FavMovies';
import {FavMoviesService} from '../../services/favmovies/favmovies.service';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-displaymovie',
  templateUrl: './displaymovie.component.html',
  styleUrls: ['./displaymovie.component.scss']
})
export class DisplaymovieComponent implements OnInit {
  private favMoviesService: any;
  private favList: Array<Result>;

  constructor(private favoriteservice: FavMoviesService, private router: Router) { }

  posterpath = 'https://image.tmdb.org/t/p/w500/';
  toggle = false;
  addToFavoritesButton = 'Add to favorites';

  isFavorite = false;
  @Input() movie: any;
  @Output() updateMovie: EventEmitter<void> = new EventEmitter<void>();

  @Input() moviesResponse: MoviesResponse;
  display = false;
  display1 = false;
  displayButton = 'Mehr';
  detailButton = 'Details';



  ngOnInit(): void {
    this.favoriteservice.isFavorite(this.movie.id).subscribe((isFavorite: boolean) => {
      this.isFavorite = isFavorite;
    });
  }

  goMovieDetail(movieid: number): void {
    console.log("Click, ", movieid);
    this.router.navigate(['/moviedetail-component'], { queryParams: { movieid: movieid } });
   } 
  addToFavorites(): void{
        console.log('test');
        if (this.isFavorite) {
          this.favoriteservice.deleteFavorite(this.movie).subscribe(response => {
            if (response.status === 200) {
              this.isFavorite = false;
              location.reload();
            }
          });
        } else {
          this.favoriteservice.addToFavorite(this.movie).subscribe(response => {
            if (response.status === 200) {
              this.isFavorite = true;

            }
          });
        }
  }
  changeButton() {
    this.display = !this.display;
    if (this.display === true) {
      this.displayButton = 'Weniger';
    } else {
      this.displayButton = 'Mehr';
    }
  }

}
