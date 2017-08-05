import {Component, Input} from '@angular/core';
import {Movie} from './movie';

@Component({
    selector: 'detail',
    template: `
    <table *ngIf="movie">
      <tr>
        <td class="tn"><img src="{{movie.thumbnail}}"/></td>
        <td class="details">
          <b>{{movie.title | uppercase}}</b><br/>
          <button [routerLink]="['/play',movie.id]">Play Now</button>
        </td>
      </tr>
    </table>
    `
})
export class DetailComponent {
    @Input() movie: Movie;
}