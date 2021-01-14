import { Component, OnInit } from '@angular/core';
import { GenresResponse } from '../../models/Genres';
import { GenresService } from '../../services/genres/genres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  constructor(private genresService: GenresService,
    private router: Router) {
  }

  genresResponse: GenresResponse;
  posterpath = "https://image.tmdb.org/t/p/w500/";

  gotoGenre(genreid: number): void {
    console.log("Click, ", genreid);
    this.router.navigate(['/allmovies-component'], { queryParams: { genreid: genreid } });
  }

  ngOnInit(): void {
    this.genresService.getGenres()
      .subscribe((data: GenresResponse) => this.genresResponse = { ...data });
  }

}
