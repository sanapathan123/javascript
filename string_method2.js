
///0   1   2   3   4   5
///m  u   m   b   a   i
///-6 -5 -4    -3  -2  -1



//slice             (indexstartposition include indexendposition not includ)
let city2 = "mumbai"
let a = city2.slice(1)
console.log(a)

let b = city2.slice(2, 5)
console.log(b)




//trimStart()
let name = " sana"
console.log(name.length)
let nameA = name.trimStart()
console.log(nameA)
console.log(nameA.length)


//trimEnd()
let nameb = "arif "
console.log(nameb.length)

let nameB = nameb.trimEnd()
console.log(nameB.length)




//trim
let namec = " asim "
console.log(namec.length)

let nameC = namec.trim()
console.log(nameC.length)



//starstWith()
let named = "sanaarif"
let AA = named.startsWith('sa')
console.log(AA)

let bb = named.startsWith('ari')
console.log(bb)


//endWith()
let CC = named.endsWith('if')
console.log(CC)


let DD = named.endsWith('Z')
console.log(DD)