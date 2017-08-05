import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  template: `
  <detail [movie]="selectedMovie"></detail>
  <movie-list [movies]="movies" (movieSelected)="onSelect($event)"></movie-list>
`
})
export class HomePageComponent implements OnInit{
  title = 'HotFlix';
  selectedMovie: Movie;
  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService
      .getMovies()
      .then((movies) => this.movies = movies);

    this.selectedMovie = this.movieService.getSelectedMovie();
  }

  onSelect(movie: Movie) {
    this.movieService.setSelectedMovie(movie);
    this.selectedMovie = this.movieService.getSelectedMovie();
  }
}
