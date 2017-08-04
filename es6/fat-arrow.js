var fn = (n1, n2) => n1 + n2;
var square = n => n*n;
console.log(square(3));
console.log(fn);

var sum = fn(2,3);
console.log(sum);

function average(n1, n2, f) {
    return f(n1,n2)/2;
}

var avg = average(2,4,(n1, n2) => n1 + n2);
console.log(avg);

var obj = {
    n: 3,
    double: function() {
        setTimeout( () => {
            console.log(this, this.n*2);
        }, 1000);
    }
};

obj.double();
