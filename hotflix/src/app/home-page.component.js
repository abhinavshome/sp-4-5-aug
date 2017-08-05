"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var movie_service_1 = require("./movie.service");
var HomePageComponent = (function () {
    function HomePageComponent(movieService) {
        var _this = this;
        this.movieService = movieService;
        this.title = 'HotFlix';
        this.movieService
            .getMovies()
            .then(function (movies) { return _this.movies = movies; });
        this.selectedMovie = this.movieService.getSelectedMovie();
    }
    HomePageComponent.prototype.onSelect = function (movie) {
        this.movieService.setSelectedMovie(movie);
        this.selectedMovie = this.movieService.getSelectedMovie();
    };
    HomePageComponent.prototype.addMovie = function (movie) {
        this.movieService.addMovie(movie);
        this.movies = this.movieService.getMovies();
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <detail [movie]=\"selectedMovie\"></detail>\n  <movie-list [movies]=\"movies\" (movieSelected)=\"onSelect($event)\"></movie-list>\n"
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map