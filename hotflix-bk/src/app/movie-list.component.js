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
var MovieListComponent = (function () {
    function MovieListComponent() {
        this.movieSelected = new core_1.EventEmitter();
    }
    MovieListComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
        this.movieSelected.emit(movie);
    };
    return MovieListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MovieListComponent.prototype, "movies", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MovieListComponent.prototype, "movieSelected", void 0);
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movie-list',
        template: "\n        <table>\n            <tr \n                class=\"row\" *ngFor=\"let movie of movies\" \n                (click)=\"onSelect(movie)\" \n                [class.selected]=\"movie==selectedMovie\"\n            >\n                <td class=\"rating\">{{movie.rating}}</td>\n                <td class=\"tn\"><img [src]=\"movie.thumbnail\" /></td>\n                <td class=\"details\">\n                    <b>{{movie.title}}</b><br/> {{movie.year}}\n                </td>\n            </tr>\n        </table>\n    ",
        styles: ["\n        table {width: 100%;}\n        .row { background-color: lightgray;}\n        .rating {font-size: 200%; width: 20%;}\n        .details {vertical-align: top;}\n        .tn {width: 20%;}\n        .selected {background-color: lightyellow;}\n    "]
    })
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map