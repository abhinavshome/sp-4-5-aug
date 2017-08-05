import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {Movie} from './movie';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'play',
    template: `
        <h2>Playing {{movie.title}}</h2>
        <img [src]="movie.thumbnail"/>
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
                this.movie = this.movieService.getMovie(movieId);
            });
    }
}