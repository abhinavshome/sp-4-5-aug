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
var PlayComponent = (function () {
    function PlayComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    PlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .paramMap
            .subscribe(function (p) {
            var movieId = +p.get('movieId');
            _this.movieService
                .getMovie(movieId)
                .then(function (movie) { return _this.movie = movie; });
        });
    };
    return PlayComponent;
}());
PlayComponent = __decorate([
    core_1.Component({
        selector: 'play',
        template: "\n        <div *ngIf=\"movie\">\n            <h2>Playing {{movie.title}}</h2>\n            <img [src]=\"movie.thumbnail\"/>\n        </div>\n    ",
        styles: ["img {width: 100%;}"]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.ActivatedRoute])
], PlayComponent);
exports.PlayComponent = PlayComponent;
//# sourceMappingURL=play.component.js.map