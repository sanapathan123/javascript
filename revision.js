//let 
let x = 10
console.log(x)
x = 80
console.log(x)
console.log('***************************')

//const
const y = 60
console.log(y)
//y=90
//console.log(y)
console.log('&&&&&&&&&&&&&&&&&&&&&')

let a = 20
let b = 80
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log('********************************')

//usig function call()
function calculator(p, q) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b)
}
calculator(9, 8)
console.log('********************************')

//function parameter
//function without parameter without return type
function add() {
    console.log(9 + 9)
}
add()
add()
console.log('*********************************')


//function with parameter without return type
function sub(a, b) {
    console.log(a - b)
}
sub(10, 12)
sub(30, 12)
console.log('************************************')


//function with parameter withreturn type //return if  storesth value and reuse also
function mul(x, y) {
    return (x * y)
}

let aa = mul(12, 2)
console.log(aa)
console.log(aa + aa)
console.log(aa * 3)
console.log('*******************************************')

//Array
//Object=property and method
//method=action and return type

//           0      1      2       3        4
let names = ['sana', 'arif', 'asim', 'sameer', 'ruksana']
console.log(names)

//for loop
for (let i = 0; i < names.length; i++) {
    console.log(i)                       //index of array
    console.log('**********')
    console.log(names[i])                //array
}
console.log('******************************')

//Array method
//            0       1        2        3
let fruits = ["mango", "banana", "grapes", "orange"]
console.log(fruits)
console.log('**********')

//Push()         //add the elementat last   //retutn-new  length of array
let a1 = fruits.push('apple')
console.log(a1)
console.log(fruits)
console.log('***************')

//unshift()    //add element at first    //return=new array
let b1 = fruits.unshift('chiko')
console.log(fruits)
console.log(b1)
console.log('***************')


//Pop()         //remove element at last         //return remove element
let c1 = fruits.pop()
console.log(fruits)
console.log(c1)
console.log('***************')


//shift()      ///remove element at first       //return remove element
let d1 = fruits.shift()
console.log(fruits)
console.log(d1)
console.log('***************')


//map()              // return array
let num = [12, 22, 33]
let e1 = num.map(function (el, index, array) {
    return el * 2
})
console.log(e1)
console.log('*********')

//Filter()            //return array
let f1 = num.filter(function (el, index, array) {
    return el > 20
})
console.log(f1)
console.log('*********')

//Find()              //return first elemento inarray
let g1 = num.find(function (el, index, array) {
    return el > 20
})
console.log(g1)
console.log('************')

//foreach()            //nothing return any thing only print
let h1 = num.forEach(function (el, index, array) {
    console.log(el + 'hello')
})
console.log('**********')

//reduce()               //  return calculation
let j1 = num.reduce(function (acc, el, index, array) {
    return el + 2
}, 0)
console.log(j1)
console.log('**********')


//findindex()                //return 
let k1 = num.findIndex(function (el, index, array) {
    return el > 20
})
console.log(k1)
console.log('**********')


//every()     // every element search    //teturn boolean value 
let l1 = num.every(function (el, index, array) {
    return el < 20
})
console.log(l1)
console.log('**********')


//some()   //some element search //return booean value
let m1 = num.some(function (el, index, array) {
    return el < 20
})
console.log(m1)
console.log('**********')


//Slice()          /// endposition not include
//         0         1      2         3
let city = ['mumbai', 'pune', 'nagpur', 'nashik']
console.log(city.slice(2, 3))
console.log(city.slice(0, 2))
console.log(city.slice(1, -1))
console.log(city.slice(-1, -3))
console.log('*********')

//splice()     // remove element of an array if neccessary add element
console.log(city.splice(2, 3))
console.log(city.splice(1, 2))
console.log(city.splice(1, 2, 'sana', 'arif'))
console.log(city)
console.log('*********')

//sort()      //alphbetic order
console.log(city.sort())
console.log('************')


//join()      ///join the string
console.log(city.join('$'))
console.log('*******')

//reveres()    //reverse order
console.log(city.reverse())
console.log('********')


//fill()      ///fill new element and last element not include
console.log(city.fill('a', 1, 2))
console.log(city.fill('b', 2, 0))
console.log('**********')


//Flat()     ///all in one array
let v = [[1, 2, 3], [4, 5, 6], [6, 7, 8]]
console.log(v.flat())
console.log('*********')


//concate()  
let c = [3, 4, 5]
let d = [5, 5, 6, 7]
console.log(c.concat(d))
console.log('********')


//includes()  //search 

let name1 = ['sa', 'da', 'fa']
console.log(name1.includes('sa'))
console.log(name1.includes('Sa'))
console.log("********")



//string
let country = "india"
country = 'india'
country = `india`
let firstName = "sana"
let lastName = "patahan"

console.log(`my firstName is ${firstName} and my lastName is ${lastName}`)
console.log('*********')


//string-object-property and method
//string stores the value of index

let district = 'nagpur'
//     0  1  2  3  4    5
//     n  a  g  p  u    r
for (let i = 0; i < district.length; i++) {
    console.log(i, district[i])
}
console.log('*********')

//property
console.log(district.length)
console.log('********')

//   string method

district = " Nagpur "
//touppercase()                         //capital letter
console.log(district.toUpperCase())
console.log('*********')

//tolowercase()                          //small letter
console.log(district.toLowerCase())
console.log('*********')

//includes()                              //substring or string
console.log(district.includes('ag'))
console.log('*********')

//indexof()                           //return the position of occarance of substring
console.log(district.indexOf())
console.log('*********')

//trimstart()                             //start space remove
console.log(district.trimStart())
console.log('*********')

//trinend()                          //end space remove
console.log(district.trimEnd())
console.log('*********')

//trim()                              //start and end space remove
console.log(district.trim())
console.log('*********')

//startwith()                              //return boolean value
console.log(district.startsWith('Na'))
console.log('*********')

//endwith()                               //return boolean value
console.log(district.endsWith('ur'))
console.log('************')

//split()      
let xz = 'sana ,abdulrauf, pathan'
let tt = xz.split('')
console.log(tt)
let yz = xz.split('a')
console.log(yz)
console.log('******')

//object
let info = ["sana", "pathan", "21", "23"]
let info4 = {
    firstName: "sana",
    lastName: "pathan",
    age: 23,
    id: 21

}

//retrive
console.log(info4.firstName)
console.log(info4['lastName'])
console.log("*********")

//update
info4.age = 22
info4['id'] = 22
console.log(info4)
console.log('##########')

//add
info4.qualification = 'bcs'
info4['skills'] = 'MSCIT'
console.log(info4)
console.log('##########')

//delete
delete info4.age
delete info4['id']
console.log(info4)
console.log('------------------')

//program 1
//        0   1  2  3
let year = [24, 32, 31, 30]
let birthyear = []

//[1988,1990,1991,1992]  output

for (i = 0; i < year.length; i++) {
    // console.log(i)
    //console.log(year[i])
    //console.log(2022-year[i])
    let ag = 2022 - year[i]
    birthyear.push(ag)
}
console.log(birthyear)
console.log('----------')



//progrma2

//print above 100
//    0   1  2   3  4  5  6 7  8     9        console.log(i)
let kl = [100, 23, 45, 5556, 675, 56, 4, 34444, 343]      //console.log(kl[i])
let above100 = []
for (let i = 0; i <= kl.length; i++) {
    //console.log(i)
    //console.log(kl[i])
    if (kl[i] > 100) {
        above100.push(kl[i])

    }
}
console.log(above100)

console.log('------------')



//program3
// totolmarks
let mark = [40, 20, 35]
total = 0
for (let i = 0; i < mark.length; i++) {
    console.log(mark[i])
    total = total + mark[i]
}
console.log(total)


























