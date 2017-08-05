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
var router_1 = require("@angular/router");
var AddMovieComponent = (function () {
    function AddMovieComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    AddMovieComponent.prototype.addMovie = function (title, rating, thumbnail, year) {
        var _this = this;
        console.log(title.value, rating.value, thumbnail.value, year.value);
        var movie = {
            title: title.value,
            rating: +rating.value,
            thumbnail: thumbnail.value,
            year: +year.value
        };
        this.movieService
            .addMovie(movie)
            .then(function () {
            _this.router.navigate(['/movies']);
        });
    };
    return AddMovieComponent;
}());
AddMovieComponent = __decorate([
    core_1.Component({
        selector: 'movie-add-form',
        template: "\n        <div>\n            <label>Title</label>\n            <input type=\"text\" #title />\n        </div>\n        <div>\n            <label>Rating</label>\n            <input type=\"text\" #rating />\n        </div>\n        <div>\n            <label>Thumbnail</label>\n            <input type=\"text\" #thumbnail />\n        </div>\n        <div>\n            <label>Year</label>\n            <input type=\"text\" #year />\n        </div>\n        <div>\n            <button (click)=\"addMovie(title, rating, thumbnail, year)\">Add</button>\n        </div>\n    ",
        styles: ["\n        label {display: inline-block; width: 100px;}\n    "]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.Router])
], AddMovieComponent);
exports.AddMovieComponent = AddMovieComponent;
//# sourceMappingURL=add-movie.component.js.map