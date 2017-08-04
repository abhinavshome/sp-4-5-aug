'use strict';

const person = Object.freeze({
    name: 'Sam'
});
person.name = 'David';
console.log(person);