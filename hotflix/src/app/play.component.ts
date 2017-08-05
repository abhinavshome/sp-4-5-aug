import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {Movie} from './movie';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'play',
    template: `
        <div *ngIf="movie">
            <h2>Playing {{movie.title}}</h2>
            <img [src]="movie.thumbnail"/>
        </div>
    `,
    styles: [`img {width: 100%;}`]
})
export class PlayComponent implements OnInit{
    movie: Movie;
    
    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route
            .paramMap
            .subscribe(p => {
                let movieId = +p.get('movieId');
                this.movieService
                    .getMovie(movieId)
                    .then(movie => this.movie = movie);
            });
    }
}