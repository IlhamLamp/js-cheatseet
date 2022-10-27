// membuat class person
class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

// inheritance class person
class employeeFullName extends Person {

    fullName() {
        const fullName = `${this.firstName} ${this.lastName}`;
        console.info(fullName);
    }

}

// inheritance class employeeFullName
class employeeDivision extends employeeFullName {

    division(job) {
        console.info(`I'm as ${job}`);
    }
}

class greetings extends employeeDivision {
    greetings(name) {
        const fname = this.firstName;
        console.info(`Hello All, ${name} and ${fname}, this is a greetings.`);
    }
}

export { Person, employeeFullName, employeeDivision, greetings }