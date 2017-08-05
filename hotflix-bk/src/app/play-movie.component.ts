import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from './movie.service';
import {Movie} from './movie';

@Component({
    selector: 'play-movie',
    template: `
        <div *ngIf="movie">
            <h2>Playing {{movie.title}}</h2>
            <img [src]="movie.thumbnail"/>
        </div>
    `,
    styles: [`
        img {width: 100%;}
    `]
})
export class PlayMovieComponent implements OnInit{
    movie: Movie;
    constructor(
        private route: ActivatedRoute,
        private movieService: MovieService
    ) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe( (p) => {
            let movieId = +p.get('movieId');
            this.movieService.getMovie(movieId)
                .then((movie) => this.movie = movie)    
        })
    }
}