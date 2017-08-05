import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  
  <h1 my-highlighter>{{title}}</h1>
  <a routerLink="/movies" routerLinkActive="current">Home</a> |
  <a routerLink="/add-movie" routerLinkActive="current">Add Movie</a> 
  <router-outlet></router-outlet>
  <br/><br/>
  `,
  styles: [`
    .current{color: red};
    `]
})
export class AppComponent {
  title = 'HotFlix';
}
