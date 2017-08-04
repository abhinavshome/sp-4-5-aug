const HasMusicPlayer = (brand) => {
    return (target) => {
        target.prototype.play = () => {
            console.log(brand + ':: O la la la');
        }
    }
}

@HasMusicPlayer('Sony')
class Car {
    model;

    drive() {
        console.log('drrr...rr...');
    }
}

var c = new Car();
c.play();

@HasMusicPlayer('JBL')
class Truck {
    model;

    loadItems() {
        console.log('loading..');
    }
}

let t = new Truck();
t.play();