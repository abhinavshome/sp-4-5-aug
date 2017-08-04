import { Component } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotFlix';
  selectedMovie: Movie;
  movies: Movie[] = MOVIES;

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
  }
}
