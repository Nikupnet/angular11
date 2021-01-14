import { MoviesResponse } from '../../models/Movies';
import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavMoviesService } from '../../services/favmovies/favmovies.service';

@Component({
  selector: 'app-displaymovie',
  templateUrl: './displaymovie.component.html',
  styleUrls: ['./displaymovie.component.scss']
})
export class DisplaymovieComponent implements OnInit {
  private favMoviesService: any;

  constructor(private favoriteservice: FavMoviesService, private router: Router) { }

  posterpath = 'https://image.tmdb.org/t/p/w500/';
  toggle = false;
  addToFavoritesButton = 'Add to favorites';

  isFavorite = false;
  @Input() movie: any;
  @Output() updateMovie: EventEmitter<void> = new EventEmitter<void>();

  @Input() moviesResponse: MoviesResponse;

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

  addToFavorites(): void {
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

}
