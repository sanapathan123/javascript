//map
let number = [11, 22, 12, 2, 3, 45, 55, 56, 66, 67, 78]
let a1 = number.map(function (el, index, arr) {
    return el + 2
})
console.log(a1)
console.log('----------------------')


//filter   above 40 
let b1 = number.filter(function (el) {
    return el < 40

})
console.log(b1)
console.log('----------------------')



//find   first value of 40
let c1 = number.find(function (el) {
    return el > 40

})
console.log(c1)
console.log('----------------------')




//findindex  above 40 index
let d1 = number.findIndex(function (el) {
    return el > 40

})
console.log(d1)
console.log('----------------------')



//every   every character in array
let e1 = number.every(function (el) {
    return el > 40

})
console.log(e1)
console.log('----------------------')


//some   some character in array
let f1 = number.some(function (el) {
    return el > 40

})
console.log(f1)
console.log('----------------------')



//sort  sort alphabetical
let x = ['sana', 'asim', 'arif']
let g1 = x.sort(function (el) {


})
console.log(g1)
console.log('----------------------')



//flat  multiple array in one array
//       0        1      2
let y = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let h1 = y.flat([])
console.log(h1)
console.log('----------------------')



//fill()  
let z = ['sameer', 'ruksana', 'abdulrauf', 'sana']
let i1 = z.fill('a', 1, 3)
console.log(i1)
let j1 = z.fill('welcome', 0, 3)
console.log(j1)
console.log('----------------------')



//splice
let country = ['india', 'uk', 'dubai', 'katar']
let q = country.pop()
console.log(q)
console.log('----------------------')


//let country=['india','uk','dubai','katar']
let q1 = country.shift()
console.log(q1)


let l1 = country.push('turkey')
console.log(l1)
console.log(country)

let m1 = country.unshift('iran')
console.log(m1)
console.log(country)

//let n1=country.splice(2,2)
//console.log(n1)
console.log(country)

let v1 = country.splice(3)
console.log(v1)
console.log(country)
console.log('----------------------')



//join
let info = ['sana', 'arif', 'sayyad', 8788520331]
let q11 = info.join('*****')
console.log(q11)


let numbers = [23, 45, 56]
let r1 = numbers.reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(r1)

let numbers1 = [34, 51, 65]
let r121 = numbers1.reduce(function (acc, el) {
    return acc + el
}, 0)
console.log(r121)
























