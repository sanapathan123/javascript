// array
// object
// string
// datatype


// set does not stores the value  by index
// set does not stores duplicate value
// while creating set you can pass iterabls

let setA = new Set()
console.log(setA)

// *****add()----->add the element
setA.add("sana")
setA.add("sana")
setA.add("arif")
setA.add("asim")
console.log(setA)

console.log(setA[0])

// has ----> search element  
let q = setA.has("asim")
console.log(setA)
console.log(q)

// add(),has(),delete(),clear(),size()

// ******clear--->delete the whole set
let q1 = setA.clear()
console.log(q1)
console.log(setA)


// *size---->how many element in array
let setB = new Set(["sana", "pathan", "sayyad", "sana"])
console.log(setB)
console.log(setB.size)

let a = [11, 22, 33, 44, 55, 66]
for (let i = 0; i < a.length; i++) {
    // console.log(i)
    console.log(a[i])
}

let info = {
    firstName: "sana",
    lastName: "pathan",
    rollNo: 21,
    skills: ['html', 'css']
}

for (let prop in info) {
    console.log(prop, info[prop])
}

for (let val of setB) {
    console.log(val)
}

setB.forEach(function (val) {
    console.log(val)
})

let setC = new Set(["sana", "arif", "asim", "ruksana", "sana"])
console.log(setC)

let setD = new Set("sanaaa")
console.log(setD)


// ******map
// map stores the data in key val format like obj
// unlike object map can have various type of keys


let info2 = {
    firstName: "sana",
    lastName: "pathan",
    1:23
}

// number ,string,boolean

// set()
let mapA = new Map()
mapA.set("firstName", "sana")
mapA.set(1, "audi")
mapA.set(true, "married")
console.log(mapA)

// size 
console.log(mapA.size)

//has()
let q2=mapA.has(2)
console.log(q2)


// delete()
mapA.delete(1)
console.log(mapA)
// mapA.delete(true)
// console.log(mapA)

// // clear()
// mapA.clear()
// console.log(mapA)


for(let [key,value] of mapA){
    console.log(key,value)
}
let k=[11,22]
let[a11,a22]=k

