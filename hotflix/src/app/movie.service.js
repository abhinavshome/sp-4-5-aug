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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//import {Observable} from 'rxjs/Observable';
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.url = 'http://localhost:4000/movies';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    MovieService.prototype.getMovies = function () {
        return this.http
            .get(this.url)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    MovieService.prototype.getMovie = function (id) {
        return this.http
            .get(this.url + "/" + id)
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    MovieService.prototype.addMovie = function (movie) {
        return this.http
            .post(this.url, movie, { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    MovieService.prototype.getSelectedMovie = function () {
        return this.selectedMovie;
    };
    MovieService.prototype.setSelectedMovie = function (movie) {
        this.selectedMovie = movie;
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map