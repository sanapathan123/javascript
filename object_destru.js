let names = ["sana", "arif", "asim", "sameer", "rukasana"]

let a = names[0]
let b = names[1]
let c = names[2]
console.log(a)
console.log(b)
console.log(c)
console.log('*********')


//array-destructing 

let [aa, bb, cc] = names
console.log(a)
console.log(b)
console.log(c)
console.log('**********')

let numbers = [90, 89, 78]
let [dd, , ff] = numbers
console.log(dd)
console.log(ff)
console.log('*********')


//object destructure

let info = {
    firstName: "sana",
    lastName: "pathan",
    age: 23,
    rollNo: 21
}
let { firstName, lastName, age, rollNo } = info
//console.log(firstName)
//console.log(lastName)
//console.log(age)
//console.log(rollNo)
//console.log("************")

let { firstName: fn, lastName: ln, age: ag, rollNo: rn } = info
console.log(fn)
console.log(ln)
console.log(ag)
console.log(rn)
console.log("************")


let vehicle = {
    color: "black",
    type: "sedane"
}
//let oo=vehicle.type
//let kk=vehicle.color
//console.log(oo)
//console.log(kk)
let { color: co, type: ty } = vehicle
console.log(co)
console.log(ty)
console.log('*************')

let ns = [[11, 22, 33], [43, 45, 46], [45, 67, 89]]
let [[a1, b1, c1], [d1, f1, e1], [g1, w1, q1]] = ns
console.log(a1, b1, c1)
console.log(d1, f1, e1)
console.log(g1, w1, q1)

console.log('***********')


let info2 = {

    mother: {
        firstName: "ruksana",
        lastName: "pathan"
    },
    father: {
        firstName: "abdulrauf",
        lastName: "pathan"
    }
}
let { father: { firstName: fn1, lastName: ln1 }, mother: { firstName: fn2, lastName: ln2 } } = info2

console.log(fn2)
//console.log(info2)

//let{father:{firstName:fn3,lastName:ln3},mother:{firstName:fn4,lastName:ln4}}=info2
//console.log(fn3)
//console.log(ln4)
//console.log(fn4)
//console.log(ln3)


let info3 = [{
    age: 12,
    marks: 23,
    firstName: "ayesha"

},
{
    age: 12,
    marks: 23,
    firstName: "ayesha"


}
]

let [{ age: x1, marks: y1, firstName: z1 }, { age: x2, marks: y2, firstName: z2 }] = info3
console.log(x1)

console.log(z2)

let j = {
    skillsOne: ["python", "django", "js"],
    skillsTwo: ["c", "php", "es6"]
}
let { skillsOne: [kk, y, ww], skillsTwo: [dg, fz, gv] } = j
console.log(fz)

let mn = [
    
     { 
        skills: "foodball",
        skills1: "hocky",
        skills2: "cricket"
    },

     {
        bk: "dosa",
        dinner: "biryani",
        snack: "wafers"
    }

]

let [  {skills:ax, skills1:bx, skills2:cx}, { bk:sm, dinner:cm ,snack:zm}]=mn
console.log(ax)

console.log(bx)

console.log(cx)

console.log(sm)

console.log(cm)

console.log(zm)






