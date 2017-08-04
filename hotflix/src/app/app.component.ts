import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
