import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Movie} from './movie';

@Component({
    selector: 'movie-list',
    template: `
        <table>
            <tr 
                class="row" *ngFor="let movie of movies" 
                (click)="onSelect(movie)" 
                [class.selected]="movie==selectedMovie"
            >
                <td class="rating">{{movie.rating}}</td>
                <td class="tn"><img [src]="movie.thumbnail" /></td>
                <td class="details">
                    <b>{{movie.title}}</b><br/> {{movie.year}}
                </td>
            </tr>
        </table>
    `,
    styles: [`
        table {width: 100%;}
        .row { background-color: lightgray;}
        .rating {font-size: 200%; width: 20%;}
        .details {vertical-align: top;}
        .tn {width: 20%;}
        .selected {background-color: lightyellow;}
    `]
})
export class MovieListComponent {
    @Input() movies: Movie[];
    @Output() movieSelected = new EventEmitter();
    selectedMovie: Movie;


    onSelect(movie: Movie) {
        this.selectedMovie = movie;
        this.movieSelected.emit(movie);
    }
}