class Student {
    constructor (name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor (name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        const exist = this.students.filter(student => student.email === studentToRegister.email);
        console.log(exist.length);
        if (exist.length === 0) {
            console.log(`Registering ${studentToRegister.email} to the ${this.name} course.`);
            this.students.push(studentToRegister);
        } else {
            console.log(`The student ${studentToRegister.email} is already registered to ${this.name} course.`)
        }
    }
}

//for console logging purposes
//const david = new Student("David", "david@email.com", "LA");
//const danielle = new Student("Danielle", "danielle@email.com", "Seattle");
//const sam = new Student("Samantha", "samantha@email.com", "NY");

//const React = new Bootcamp("React", "intermediate");
//const Fundamentals = new Bootcamp("Fundamental Web Dev", "beginner");