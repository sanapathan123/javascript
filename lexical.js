//lexical scope=> area in which item is aceessible or visible by other code
//child function can access method and parameter of child function

function addition() {
    let a = 10
    let b = 20
    console.log(a + b) //30

    function additionB() {
        let c = 50
        let d = 60
        console.log(a + b)  //30
        console.log(c + d)   //110
        //console.log(e)
        function additionC() {
            let e = 60
            let f = 70
            console.log(a + b + c + d + e + f)

        }
        additionC()

    }
    additionB()

}
addition()

console.log("---------------------------")

//closures
function add(x, y) {
    console.log(x + y)//90
    return x + y       //90
    console.log("hello")
}
let u = add(23, 67)
console.log(u)//90
console.log("_______________________________")

// function add1(){
//     let p=45
//     let q=78
//     return function(){
//         console.log(p+q)
//     }
// }
// let tt=addC()


// let tt=function(){
//     console.log(p+q)
// }
// console.log(tt)
// tt()
console.log("--------------------------")

//let and const are blocked scopes

//program3
let x = 10
console.log(x)//10
{
    let y = 40
    console.log(y) //40
}
//console.log(y)

console.log("-----------------------------")

let i = 100
{
    i = 300
    console.log(i)//300
}
console.log(i) //300

console.log("------------------------------")

const o = 900
{
    let o = 77
    console.log(o)//77
}
console.log(o) //900

console.log("-------------------------------")

const hh = 300
{
    const hh = 300
    console.log(hh)
}
console.log(hh) //300



//actual diffrence between arrow function and normal function

var firstname = `sana`
var lastname = `pathan`

let info = {
    firstname: "sana",
    lastname: "pathan",
    display: function () {    //function expression  
        console.log(this.firstname + this.lastname)  //this=info

        let display2 = function () {   //this=window
            console.log(this.firstname + this.lastname)  //parent function //var variable used
        }
        display2()//
    }

}
info.display()



var firstName = "arif"
var lastName = "sayyad"

let info2 = {
    firstName: "arif",
    lastName: "sayyad",
    display: function () {            //fun expression
        console.log(this)                 //this=>info2
        console.log(this.firstName + this.lastName)

        let display2 = () => {
            //this=>info2 
            console.log(this.firstName + this.lastName)
        }
        display2()
    }
}
info2.display()

//arrow function only run window 
//info3==>this====>window
let info3 = {
    firstName: "asim",
    lastName: "sayyad",
    display: () => {              //arrow function 
        console.log(this)                       //this=window
        console.log(this.firstName + this.lastName)

        let display2 = () => {             //arrow function
            console.log(this.firstName + this.lastName)//this=>this keyword can access parent display function
        }
        display2()
    }
}
info3.display()

// //why not let
// var m = 78
// console.log(window.m)


//call(),bind(),apply()

let sana = {
    firstName: "sana",
    lastName: "pathan",
    age: 24,
    rollNo: 21,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
sana.display()

//method borrowing

let display2= sana.display

let display= function () {
    console.log(this.firstName + this.lastName)
}
display2()










