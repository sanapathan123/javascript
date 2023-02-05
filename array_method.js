// datatype
//typeof
let name = "sana"
let a = 5
let c = true
console.log(typeof name)
console.log(typeof a)
console.log(typeof c)
console.log('----------------------')



//////////0,         1,       2,      3,       4
let fruit = ["mango", "grapes", "banana", "chiko", "straberry"]
console.log(fruit)
console.log(fruit.length)
console.log(fruit[2])
console.log(fruit[4])
console.log('----------------------')


//push()
let aa = fruit.push("papaya")
console.log(fruit)
console.log(fruit.length)
console.log('----------------------')



//unshift()
let bb = fruit.unshift("orange")
console.log(fruit)
console.log(fruit.length)
console.log('----------------------')


//pop()
let cc = fruit.pop()
console.log(fruit)
console.log(fruit.length)
console.log('----------------------')


//shift()
let dd = fruit.shift()
console.log(fruit)
console.log(fruit.length)
console.log('----------------------')


//includes()
let ee = fruit.includes('banana')
console.log(ee)

let ff = fruit.includes('apple')
console.log(ff)
console.log('----------------------')


//indexof()
let gg = fruit.indexOf('chiko')
console.log(gg)
console.log('----------------------')


//reverse
let hh = fruit.reverse()
console.log(fruit)
console.log('----------------------')


//for()loop
for (let i = 0; i < fruit.length; i++) {
    console.log(i)
    console.log(fruit[i])
}
console.log('----------------------')


//concate
let name1 = ['sana', 'arif', 'asim']
let name2 = ['sameer', 'ruksana', 'abdulrauf']
let xx = name1.concat(name2)
console.log(xx)

let yy = name2.concat(name1)
console.log(yy)
console.log('----------------------')


//slice
console.log(name1.slice(2))
console.log(name1.slice(0, 2))

console.log(name2.slice(2))
console.log(name2.slice(0, 2))
console.log(name2.slice(0))




