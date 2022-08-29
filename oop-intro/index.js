class Person {
    // Matching these parameter names w/ this.keyName is just a common pattern
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName() {
        return this.firstName + " " + this.lastName
    }
}

class Student extends Person {
    constructor(firstName, lastName, hobbies = [] ) {
        // super calls the constructor for the parent class to pass shared properties
        // to our student so they can be saved (also how student receives the fullName method)
        super(firstName, lastName)
        this.hobbies = hobbies
    }

    // any useful methods that relate SPECIFICALLY to the student class would be here
    
    //helpful method may be something to print out all student's hobbies
}

class Teacher extends Person {
    constructor(firstName, lastName, lecturesTaught) {
        super(firstName, lastName)
        this.lecturesTaught = lecturesTaught
    }
}

class Lecture {
    constructor(topic, zoomLink, capacity, teacher, roster = []) {
        this.topic = topic
        this.zoomLink = zoomLink
        this.capacity = capacity
        this.teacher = teacher
        this.roster = roster
    }

    createAttendanceList = () => {
        const fullNames = []
        
        for (let i = 0; i < this.roster.length; i++) {
            //using const b/c if we use var it will hoist the student variable to the createAttendanceList method
            const student = this.roster[i]
            fullNames.push(student.fullName())
        }

        return fullNames
    }
}

const raphsHobbies = ["soccer", "pottery", "watching anime"]
const raph = new Student("Raphael", "Charles", raphsHobbies)
const seansHobbies = ["cycling", "pottery", "watching anime"]
const sean = new Student("Sean", "McNamee", seansHobbies)
const yukisHobbies = ["gaming", "pottery", "underwater basket weaving"]
const yuki = new Student("Yuki", "Rideb", yukisHobbies)

const alexMiller = new Teacher("Alex", "Miller", 9001)
// console.log(alexMiller.fullName() + ` has taught ${alexMiller.lecturesTaught} lectures`)

// const spensir = new Person("Spensir", "Fields")
// spensir = new Person("Not Spensir", "Fields")  //can't do this b/c of const declaration
// spensir.firstName = "Spen-Sir"
// console.log(raph.fullName())
// console.log(raph.hobbies)

const mernLecture = new Lecture("OOP Lecture", "somezoomlink.com", 3, alexMiller, [raph, sean, yuki])

mernLecture.createAttendanceList()
