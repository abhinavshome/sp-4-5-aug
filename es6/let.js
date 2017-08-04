let x = true, y;
if(x) {
    y = 10;
}
console.log(y);

for(let i=0; i <5; i++) {
    setTimeout(function() { 
        console.log(i);
    }, 1000);
}