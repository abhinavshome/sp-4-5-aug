let fruits = ['Apple', 'Mango', 'Guava'];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

let [fruit1, fruit2, fruit3, f] = fruits;
console.log(fruit1, fruit2, fruit3, f);

let [first, ...remaining] = fruits;
console.log(first, remaining);

let student = {
    name: 'Sam',
    course: 'Angular2',
    age: 25
};

let { name, age} = student;

// let name = student.name;
// let age = student.age;

console.log(name, age);
