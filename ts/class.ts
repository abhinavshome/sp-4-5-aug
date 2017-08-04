interface Student {
    courses: string[];
    tellCourses: Function;
}

class Person implements Student{ 
    courses: string[];   
    constructor(public firstName, 
        private lastName,
        private age) {
    }

    tellCourses(){}

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    introduce() {
        console.log(`Hi! My name is ${this.fullName()}`)
    }
    
}

var sam = new Person('Sam', 'Micheal', 26);
sam.introduce();

console.log(sam.firstName);