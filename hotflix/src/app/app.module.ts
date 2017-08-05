import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { MovieListComponent } from './movie-list.component';
import { AddMovieComponent } from './add-movie.component';
import { HomePageComponent } from './home-page.component';
import { PlayComponent } from './play.component';

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
        path: 'play/:movieId',
        component: PlayComponent
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
    PlayComponent
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
