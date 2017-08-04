import {Component, Output, EventEmitter} from '@angular/core';
import {Movie} from './movie';

@Component({
    selector: 'movie-add-form',
    template: `
        <div>
            <label>Title</label>
            <input type="text" #title />
        </div>
        <div>
            <label>Rating</label>
            <input type="text" #rating />
        </div>
        <div>
            <label>Thumbnail</label>
            <input type="text" #thumbnail />
        </div>
        <div>
            <label>Year</label>
            <input type="text" #year />
        </div>
        <div>
            <button (click)="addMovie(title, rating, thumbnail, year)">Add</button>
        </div>
    `,
    styles: [`
        label {display: inline-block; width: 100px;}
    `]
})
export class AddMovieComponent {
    @Output() formSubmit = new EventEmitter();

    addMovie(
        title: HTMLInputElement,
        rating: HTMLInputElement,
        thumbnail: HTMLInputElement,
        year: HTMLInputElement
    ) {
        console.log(title.value, rating.value, thumbnail.value, year.value);
        let movie: Movie = {
            title: title.value,
            rating: +rating.value,
            thumbnail: thumbnail.value,
            year: +year.value
        }
        this.formSubmit.emit(movie);
    }

}