var Person = (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.tellCourses = function () { };
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.introduce = function () {
        console.log("Hi! My name is " + this.fullName());
    };
    return Person;
}());
var sam = new Person('Sam', 'Micheal', 26);
sam.introduce();
console.log(sam.firstName);
