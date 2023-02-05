// // class Student {
//     constructor(firstName, lastName, DOB, permnant_add) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.DOB = DOB
//         this.permnant_add = permnant_add

//     }

// }

// class Teacher {
//     constructor(firstName, lastName, DOB, permnant_add, salary) {

//         this.firstName = firstName
//         this.lastName = lastName
//         this.DOB = DOB
//         this.permnant_add = permnant_add
//         this.salary = salary
//     }

// }

// let sana = new Student("sana", "pathan", "5/7/98", "ghargav")
// let sana3 = new Teacher("sana3", "pathan", "1/6/77", "rajapur", 50000)
// console.log(sana)
// console.log(sana3)


//**********inheritance */
class Student1 {
    constructor(firstName, lastName, DOB, permnant_add) {
        this.firstName = firstName
        this.lastName = lastName
        this.DOB = DOB
        this.permnant_add = permnant_add

    }

    display() {
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends Student1 {
    salary = 50000
}


let asim = new Teacher("asim", "sayyad", "5/7/98", "ghargav")
console.log(asim.salary)
console.log(asim.firstName)
console.log(asim.lastName)
console.log(asim.DOB)
console.log(asim.permnant_add)
asim.display()

console.log("---------------------------")

class StudentA {
    constructor(firstName, lastName, age, permnant_add) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.permnant_add = permnant_add
    }
}
class TeacherA extends StudentA {
    constructor(firstName, lastName, age, permnant_add) {
        super(firstName, lastName, age, permnant_add)
        this.salary = this.salary
    }
}
let arif = new TeacherA("arif", "sayyad", 28, "sangmner", 50000)
console.log(arif.firstName)
console.log(arif.lastName)
console.log(arif.age)
console.log(arif.permnant_add)

console.log("------------------------------")

class Grandfather {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
class Father extends Grandfather {
    constructor(firstName, lastName, FfirstName) {
        super(firstName, lastName)
        this.FfirstName = FfirstName
    }

    displayFName() {
        console.log(this.FfirstName + this.lastName)

    }
}
class Son extends Father {
    constructor(firstName, lastName, FfirstName, Sname) {
        super(firstName, lastName, FfirstName)
        this.Sname = Sname
    }
    displaySName() {
        console.log(this.Sname+this.FfirstName+this.firstName + this.lastName)
    }
}

let sameer = new Son("Hasan", "pathan", "Abdulrauf", "sameer")

sameer.displayName()
sameer.displayFName()
sameer.displaySName()










