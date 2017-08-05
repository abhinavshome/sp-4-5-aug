import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { MovieListComponent } from './movie-list.component';
import { AddMovieComponent } from './add-movie.component';
import { HomePageComponent } from './home-page.component';
import { PlayMovieComponent } from './play-movie.component';
import { MyHighlighterDirective } from './my-highlighter.directive';


import { MovieService } from './movie.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'movies',
        component: HomePageComponent
      },
      {
        path: 'add-movie',
        component: AddMovieComponent
      },
      {
        path: 'play-movie/:movieId',
        component: PlayMovieComponent
      },
      {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    DetailComponent,
    MovieListComponent,
    AddMovieComponent,
    HomePageComponent,
    PlayMovieComponent,
    MyHighlighterDirective
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
