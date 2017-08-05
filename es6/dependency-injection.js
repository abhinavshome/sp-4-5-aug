class Car {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} running...`);
    }
}

const runCar = (car) => {
    car.run();
}

var car = new Car('Maruti');
var honda = new Car('Honda');
runCar(honda);