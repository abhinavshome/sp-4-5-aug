var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HasMusicPlayer = function (brand) {
    return function (target) {
        target.prototype.play = function () {
            console.log(brand + ':: O la la la');
        };
    };
};
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('drrr...rr...');
    };
    Car = __decorate([
        HasMusicPlayer('Sony')
    ], Car);
    return Car;
}());
var c = new Car();
c.play();
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.loadItems = function () {
        console.log('loading..');
    };
    Truck = __decorate([
        HasMusicPlayer('JBL')
    ], Truck);
    return Truck;
}());
var t = new Truck();
t.play();
