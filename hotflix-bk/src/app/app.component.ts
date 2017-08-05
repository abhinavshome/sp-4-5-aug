import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 my-highlighter>{{title}}</h1>
    <a routerLink="/movies">Home</a> | 
    <a routerLink="/add-movie">Add Movie</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'HotFlix';
}
