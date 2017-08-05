import {Injectable} from '@angular/core';
import {Movie} from './movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
    private movies: Movie[] = MOVIES;
    private selectedMovie: Movie;

    getMovies() : Movie[] {
        return this.movies;
    }

    getMovie(id: number) : Movie {
        return this.movies.find(m => m.id == id);
    }

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    getSelectedMovie() : Movie {
        return this.selectedMovie;
    }

    setSelectedMovie(movie: Movie) {
        this.selectedMovie = movie;
    }
}