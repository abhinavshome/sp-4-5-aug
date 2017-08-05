import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  template: `  
  <h1>{{title}}</h1>
  <a routerLink="/movies" routerLinkActive="current">Home</a> |
  <a routerLink="/add-movie" routerLinkActive="current">Add Movie</a> 
  <router-outlet></router-outlet>
  <br/><br/>
  `,
  styles: [`
    .current{color: red};
    `]
})
export class AppComponent {
  title = 'HotFlix';
  selectedMovie: Movie;
  movies: Movie[];

  constructor(private movieService: MovieService) {
    this.movies = this.movieService.getMovies();
    this.selectedMovie = this.movieService.getSelectedMovie();
  }

  onSelect(movie: Movie) {
    this.movieService.setSelectedMovie(movie);
    this.selectedMovie = this.movieService.getSelectedMovie();
  }

  addMovie(movie: Movie) {
    this.movieService.addMovie(movie);
    this.movies = this.movieService.getMovies();
  }
}
