//object===>property and method


//object literal

let arif = {
    firstName: 'arif',
    lastName: 'sayyad',
    Age: 27,
    rollNo: 25,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
arif.display()


let asim = {
    firstName: 'asim',
    lastName: 'sayyad',
    Age: 1,
    rollNo: 11,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
asim.display()

console.log('----------------')

console.log(arif.firstName)
console.log(arif.lastName)
arif.display()

console.log('--------------------')

// dummy method       //TEMPLATE ------>OBJECT CREATION

//setting property value of object outside the class


// class person{
//     firstName=undefined
//     lastName=undefined
//     Age=undefined
//     rollNo=undefined

//     display(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// let asim2= new person()
//  console.log(asim2)

//  asim2.Age=12
// asim2.lastName='sayyad'
// asim2.rollNo=33
// asim2.firstName='asim'

// console.log(asim2)
// asim2.display()
// console.log('-------------------')


//using constructor

class person1 {
    constructor(fn, ln, roll, age) {
        this.firstName = fn
        this.lastName = ln
        this.rollNo = roll
        this.Age = age
    }
    display() {
        console.log(this.firstName + this.lastName)
    }

}

let asim3 = new person1('asim3', 'sayyad', 3, 30)
console.log(asim3)

console.log('----------------------')

let sameer = new person1('sameer', 'pathan', 29, 56)
console.log(sameer)

console.log('------------------')

let sana = new person1('sana', 'sayyad', 47, 45)
console.log(sana)

console.log('----------------')

sana.lang = 'hindi'

console.log(sana)





//settng the value using get function

class person3 {
    setAge(ag) {
        this.age = ag
    }

    setfirstName(fn) {
        this.firstName = fn
    }

    setlastName(ln) {
        this.lastName = ln
    }


    setrollNo(rn) {
        this.rollNo = rn
    }

}
let arif5 = new person3()
console.log(arif5)


arif5.setAge(19)
arif5.setfirstName('arif')
arif5.setlastName('sayyad')
arif5.setrollNo(20)
console.log(arif5)



















