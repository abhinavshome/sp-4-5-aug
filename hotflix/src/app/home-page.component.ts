import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  template: `
  <detail [movie]="selectedMovie"></detail>
  <movie-list [movies]="movies" (movieSelected)="onSelect($event)"></movie-list>
`
})
export class HomePageComponent {
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
