import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise'
//import {Observable} from 'rxjs/Observable';

@Injectable()
export class MovieService {
    private selectedMovie: Movie;
    private url = 'http://localhost:4000/movies';
    private headers = new Headers({'Content-Type': 'application/json'})

    constructor(private http: Http) {

    }
    getMovies(): Promise<Movie[]> {
        return this.http
            .get(this.url)
            .toPromise()
            .then( (res) => res.json());
    }

    getMovie(id: number): Promise<Movie> {
        return this.http
            .get(`${this.url}/${id}`)
            .toPromise()
            .then(res => res.json());
    }

    addMovie(movie: Movie): Promise<Movie> {
        return this.http
            .post(this.url, movie, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
    }

    getSelectedMovie(): Movie {
        return this.selectedMovie;
    }

    setSelectedMovie(movie: Movie) {
        this.selectedMovie = movie;
    }
}