"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var detail_component_1 = require("./detail.component");
var movie_list_component_1 = require("./movie-list.component");
var add_movie_component_1 = require("./add-movie.component");
var home_page_component_1 = require("./home-page.component");
var play_movie_component_1 = require("./play-movie.component");
var my_highlighter_directive_1 = require("./my-highlighter.directive");
var movie_service_1 = require("./movie.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'movies',
                    component: home_page_component_1.HomePageComponent
                },
                {
                    path: 'add-movie',
                    component: add_movie_component_1.AddMovieComponent
                },
                {
                    path: 'play-movie/:movieId',
                    component: play_movie_component_1.PlayMovieComponent
                },
                {
                    path: '',
                    redirectTo: '/movies',
                    pathMatch: 'full'
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            detail_component_1.DetailComponent,
            movie_list_component_1.MovieListComponent,
            add_movie_component_1.AddMovieComponent,
            home_page_component_1.HomePageComponent,
            play_movie_component_1.PlayMovieComponent,
            my_highlighter_directive_1.MyHighlighterDirective
        ],
        providers: [
            movie_service_1.MovieService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map