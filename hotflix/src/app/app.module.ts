import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DetailComponent } from './detail.component';
import { MovieListComponent } from './movie-list.component';
import { AddMovieComponent } from './add-movie.component';

import { MovieService } from './movie.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    DetailComponent,
    MovieListComponent,
    AddMovieComponent
  ],
  providers: [
    MovieService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
