let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let aa = arr.map(function (el, index, arr) {
    return el * 2
})
console.log(aa)
console.log('----------------------')


//map
let bb = arr.map(function (el, index, arr) {
    return el / 2
})
console.log(bb)
console.log('----------------------')


let cc = arr.map(function (el, index, arr) {
    return el + 5
})
console.log(cc)
console.log('----------------------')


//filter
let jj = [11, 22, 33, 44, 55, 66, 77, 88, 99, 12, 23, 24, 34, 45, 56,]
let a = jj.filter(function (el, index, arr) {
    return el < 50
})
console.log(a)
console.log('----------------------')


let jj1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 12, 23, 24, 34, 45, 56,]
let a1 = jj1.filter(function (el, index, arr) {
    return el > 50
})
console.log(a1)
console.log('----------------------')



//foreach()
let name = ['sana', 'arif', 'asim']
let b1 = name.forEach(function (el, index, arr) {
    console.log('welcome' + el)
})
//console.log(b1)    
console.log('----------------------')


let b11 = name.forEach(function (el, index, arr) {
    console.log('hello' + el)
})
console.log('----------------------')





let k = [1, 22, 33, 44, 55, 55, 65, 43, 21, 43]
//find()
let a2 = k.find(function (el) {
    return el > 50
})
console.log(a2)

let z = k.filter(function (el) {
    return el > 50
})
console.log(z)
console.log('----------------------')


//findindex
let b2 = k.findIndex(function (el) {
    return el > 50
})
console.log(b2)
console.log('----------------------')



//every()
let l = [2, 33, 22, 44, 57, 51, 62, 62, 43, 65]
let l1 = l.every(function (el, index, arr) {
    return el > 10
})
console.log(l1)

let lc = [33, 22, 44, 57, 51, 62, 62, 43, 65]
let l1a = lc.every(function (el, index, arr) {
    return el > 10
})
console.log(l1a)
console.log('----------------------')



//some()
let l11 = l.some(function (el, index, arr) {
    return el > 10
})
console.log(l11)

let lc1 = [2, 33, 22, 44, 57, 51, 62, 62, 43, 65]
let l121 = lc1.some(function (el, index, arr) {
    return el > 10
})
console.log(l121)
2






















































