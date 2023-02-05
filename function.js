//function

let x = 10
let y = 5

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

console.log('---------------')

let x1 = 110
let y1 = 5

console.log(x1 + y1)
console.log(x1 - y1)
console.log(x1 * y1)
console.log(x1 / y1)
console.log(x1 % y1)

console.log('--------------')

//function used for to avoid code repetation
//function 3 ways

//function declaration 
//function expression
//function arrow

//function declaration

function add1(s, t) {
    return (s + t)

}
let a = add1(40, 5)
console.log(a)

console.log('----------------------')

//function expression

let add2 = function (x, y) {
    return x + y
}
let b = add2(20, 5)
console.log(b)

console.log('-----------------')

//arrow function

let add3 = (x, y) => {
    return x + y
}
let c = add3(78, 78)
console.log(c)


console.log("------------------")

//fun declaration
function mul(s, t) {
    return s * t
}
let d = mul(4, 5)
console.log(d)

console.log('--------------')


//fun expression
let mul11 = function (s, t) {
    return s * t
}
let v = mul11(5, 9)
console.log(v)


console.log('-------------------')


//fun arrow
let mul1 = (s, t) => {
    return s * t
}
let u = mul1(9, 9)
console.log(u)
console.log('----------------------')

let mulA = (s, t) => {
    return s * t
}
mulA(9, 7)


let mulB = (s, t) => s * t
let f = mulB(9, 7)
console.log(f)


console.log('-------------------')


//pass string as a parameter to function and return string
function greet(word) {
    return "Good" + word   //string+string==>string
}
let z = greet("morning")
console.log(z)

console.log('--------------------')

//pass number as a paraneter to function and return number only

function sub(p, q) {
    return p - q
}
let s = sub(23, 6)
console.log(s)
console.log(typeof s)
console.log('--------------------')


//pass boolean as parameter to function and return boolean olny
function canDrive(havecar, age) {
    if (age > 18 && havecar) {
        return true
    }
    else {
        return false
    }
}
let j = canDrive(true, 19)
console.log(j)
let i = canDrive(false, 17)
console.log(i)

console.log('----------------------')

//pass array as parameter to function and return only array

let num = [33, 44, 55, 66, 23, 12, 11, 31, , 21, 33, 22, 56, 555]
//function above 30arr
function above30(arr) {
    let pq = num.filter(function (el) {
        return el > 30
    })
    return pq
}
let k = above30(num)
console.log(k)

console.log('---------------')

//pass object as parameter to another function  and return object

let oo = {
    firstName: 'sana',
    lastName: 'pathan',
    Age: 23
}

function updateAge(info) {
    let info1 = {
        firstName: 'sana',
        lastName: 'pathan',
        Age: 23

    }
    info1.Age = 55
    return info1
}
let ll = updateAge(oo)
console.log(ll)

console.log('-----------------')

//function as parameter to another function
//let h=10 
//console.log(h)

let div = function (x, y) {
    return x / y
}

//console.log(div)
// div(12,3)

function division(a, b, fn) {
    // let fn=function(x,y){
    //   return x/y
    // }
    let rr = fn(a, b)
    return rr
}
let rr = division(12, 6, div)
console.log(rr)













