console.log('My Assignment🔽');

class Person {
    constructor(lastName, firstName) {
        this.lastName = lastName
        this.firstName = firstName
    }
    getName () {
        return this.firstName
    }
}

class Teacher extends Person {
    getName () {
        return (`${this.lastName} ${this.firstName}`)
    }

    teach (subject) {
        console.log(`${this.getName()} is teaching ${subject}`);
    }
}

const teacher = new Teacher('Oloyede', 'Naheem')
console.log(teacher.getName());
teacher.teach('Mathematics')


