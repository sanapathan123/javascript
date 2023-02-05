// let vehicle=function(color,type,name,modelNo){
//     this.color=color
//     this.type=type
//     this.name=name
//     this.modelNo=modelNo
//     this.dispalyColor=function(){
//         console.log(this.color)
//     }
// }

// let audi=new vehicle("red","sedane","q6",123)
// audi.dispalyColor()
// console.log(audi)

// let bmw=new vehicle("blue","suv","bmw1",456)
// bmw.dispalyColor()
// console.log(bmw)

//*********object proto */
let vehicle = function (color, type, name, modelNo) {
    this.color = color
    this.type = type
    this.name = name
    this.modelNo = modelNo
    // this.displayColor=function(){
    //    console.log(this.color)
    // }
}
vehicle.prototype.displayColor = function () {
    console.log(this.color)
}
vehicle.prototype.city = "mumbai"



let audi = new vehicle("red", "sedane", "q6", 123)
audi.displayColor()
console.log(audi)
console.log(audi.city)
let bmw = new vehicle("blue", "suv", "bmw1", 456)
bmw.displayColor()
console.log(bmw)
console.log(bmw.city)


console.log(audi)
console.log(bmw)

console.log(audi.__proto__ === vehicle.prototype)
console.log(bmw.__proto__ === vehicle.prototype)

console.log(audi.hasOwnProperty('city'))
console.log(audi.hasOwnProperty('name'))

//**********property inheritance

let student = function (firstName, lastName, age, rollNo) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNo = rollNo
    // this.display=function(){
    //     console.log(this.firstName+this.lastName)

    // }
}

let arif = new student("arif", "sayyad", 23, 21)
console.log(arif)

let arif1 = new student("arif1", "sayyad", 32, 11)
console.log(arif1)

console.log(arif instanceof student)
console.log(arif1 instanceof student)


//every object has one property----> __proto__==parent.prototype




let vehicle1 = function (color, type, regNo) {
    this.color = color
    this.type = type
    this.regNo = regNo
    // this.displayColor=function(){
    //     console.log(this.color)
    // }
}

let audi1 = new vehicle1("violet", "sedane", 21)
console.log(audi1)

let bmw1 = new vehicle1("brown", "q6", 20)
console.log(bmw1)

//audi1.displayColor()
//bmw1.displayColor()


//every object has one property--> __proto__==parent.prototype
vehicle1.prototype.displayColor = function () {
    console.log(this.color)
}
vehicle1.prototype.city = "pune"


console.log(audi1.__proto__ === vehicle1.prototype)
console.log(bmw1.__proto__ === vehicle1.prototype)


audi1.displayColor()
bmw1.displayColor()

console.log(audi1 instanceof vehicle1)
console.log(bmw1 instanceof vehicle1)


console.log(audi1.hasOwnProperty('city'))
console.log(bmw1.hasOwnProperty('city'))

console.log(audi1.hasOwnProperty('name'))
console.log(bmw1.hasOwnProperty('name'))




//************************object ES6 class


class student1 {
    constructor(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNo = rollNo
        this.displayName = function () {
            console.log(this.firstName + this.lastName)
        }
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
let aa = new student1("a", "b", 21, 34)
let bb = new student1("p", "q", 32, 56)

console.log(aa)
console.log(bb)

aa.displayName()
bb.dispayName()

console.log(aa.__proto__ === student1.prototype)
console.log(bb.__proto__ === student1.prototype)

//*******************object create */

let proto = {
    init(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNo = rollNo
    },
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

let asim = Object.create(proto)
console.log(asim)
asim.init("c", "d", 12, 56)
console.log(asim)

