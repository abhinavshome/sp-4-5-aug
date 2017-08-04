"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'HotFlix';
        this.movies = [
            {
                title: 'Anand',
                year: 1971,
                rating: 8.7,
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwYmRiMjgtYmM1NC00MmJlLWJlZTMtNjhiNjE4Mzg3MGU2XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_UY67_CR1,0,45,67_AL_.jpg'
            },
            {
                title: 'Drishyam',
                year: 2013,
                rating: 8.6,
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY67_CR3,0,45,67_AL_.jpg'
            },
            {
                title: 'Nayakan',
                year: 2003,
                rating: 8.5,
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_UX45_CR0,0,45,67_AL_.jpg'
            },
            {
                title: 'Anbe Sivam',
                year: 2003,
                rating: 8.5,
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWQxY2MyNmUtOTkxZC00MmQ3LWFkMjMtNWU3YmFlZDM5YTBhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg'
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <table>\n      <tr class=\"row\">\n        <td class=\"rating\">{{movie.rating}}</td>\n        <td class=\"tn\"><img src=\"{{movie.thumbnail}}\"/></td>\n        <td class=\"details\">\n          <b>{{movie.title}}</b><br/>\n          {{movie.year}}\n        </td>\n      </tr>\n    </table>\n  ",
        styles: [
            "\n      table {width: 100%;}\n      .row { background-color: lightgray;}\n      .rating {font-size: 200%; width: 20%;}\n      .details {vertical-align: top;}\n      .tn {width: 20%;}\n    "
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map