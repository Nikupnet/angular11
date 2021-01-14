import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AllmoviesComponent } from './components/allmovies/allmovies.component';
import { BestmoviesComponent } from './components/bestmovies/bestmovies.component';
import { PopmoviesComponent } from './components/popmovies/popmovies.component';
import { ReleasemoviesComponent } from './components/releasemovies/releasemovies.component';
import { FavmoviesComponent } from './components/favmovies/favmovies.component';
import { SearchmoviesComponent } from './components/searchmovies/searchmovies.component';
import { GenresComponent } from './components/genres/genres.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';

const routes: Routes = [ // sets up routes constant where you define your routes
  { path: '', component: AllmoviesComponent },
  { path: 'allmovies-component', component: AllmoviesComponent },
  { path: 'bestmovies-component', component: BestmoviesComponent },
  { path: 'popmovies-component', component: PopmoviesComponent },
  { path: 'releasemovies-component', component: ReleasemoviesComponent },
  { path: 'favmovies-component', component: FavmoviesComponent },
  { path: 'searchmovies-component', component: SearchmoviesComponent },
  { path: 'genres-component', component: GenresComponent },
  { path: 'moviedetail-component', component: MoviedetailComponent },
  {path:'home', component: AllmoviesComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
