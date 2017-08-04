import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DetailComponent } from './detail.component';
import { MovieListComponent } from './movie-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    DetailComponent,
    MovieListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
