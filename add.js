let a = 3
let b = 8
console.log(a + b)
console.log('------------------')

//let
let e = 9
console.log(e)
e = 5
console.log(e)
console.log('------------------')


//const    //const -not change the value  
const w = 0
console.log(w)

//w=9
//console.log(w)

let x = 2
let y = 3
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log('------------------')



function calculator(x, y) {

    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)


}
calculator(5, 5)
console.log('------------------')
//function without parameter and without return type
//functio add ()
//{
//console.log(9+0)
//}
//add()


//function with parameter and without type
function add1(a, b) {
    console.log(a + b)
}

add1(22, 22)
add1(34, 45)
console.log('------------------')

//function with parameter and with reurn type

function mul(p, q) {
    return p * q
}
let ab = mul(12, 4)
console.log(ab)
console.log(ab + ab)
console.log(ab * 2)
console.log('------------------')

function addition(j, k) {
    console.log(9 + 8)
}
addition()
addition()
console.log('------------------')

function subtraction(x1, y1) {
    console.log(x1 - y1)
}

subtraction(90, 67)
subtraction(50, 30)
console.log('------------------')

function division(s, q) {
    return s / q
}
let aaa = division(120, 3)
console.log(aaa)