//*************object type
//object literal
//function constructor
//ES6 class
//Object.create

//object literal

let sana = {
    fistName: "sana",
    lastName: "pathan",
    age: 23,
    rollNo: 21
}
console.log(sana)
console.log('--------------')


let arif = {
    fistName: "arif",
    lastName: "sayyad",
    age: 27,
    rollNo: 19
}
console.log(arif)

console.log('-----------------')
//function constructor used for  reduce line of object

//function constructor

let student = function (fn, ln, age, rollNo) {
    this.fistName = fn             //this means property  name  and fn means firstname 
    this.lastName = ln
    this.age = age
    this.rollNo = rollNo
}

let sana2 = new student("sana2", "pathan", 21, 67)
console.log(sana2)
console.log('-------------------------')


let arif2 = new student("arif2", "sayyad", 28, 54)
console.log(arif2)

console.log('---------------------')

let asim = new student("asimali", "sayyad", 1, 11)
console.log(asim)

console.log('---------------------------')

//***************Es6 class*******************

class student2 {
    constructor(fn, ln, age, rollNo) {
        this.fistName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    }
}

let sameer = new student2("sameer", "pathan", 25, 20)

console.log(sameer)

console.log('--------------------------')

let ruksana = new student2("ruksana", "pathan", 40, 1)
console.log(ruksana)

console.log('-----------------')

//add operation
ruksana.city = "sangmner"
ruksana["language"] = "hindi"
console.log(ruksana)

console.log('--------------------------')


//**************object.create *******************//
let sana3 = Object.create({})

console.log(sana3)

console.log('-----------------------')


sana3.fistName = "sana"
sana3.lastName = "pathan"
sana3.age = 26
sana3.rollNo = 76

console.log(sana3)
console.log('-----------------------')

let proto={
    init(fn,ln,age,rollNo){
        this.fistName=fn
        this.lastName=ln
        this.age=age
        this.rollNo=rollNo
    }
}

let sana4=Object.create(proto)
console.log(sana4)
sana4.init("sana4","sayyad",45,78)
console.log(sana4)

console.log('-----------------------')


//****retrive******* */
//dot notation
//bracket notation

console.log(sana.fistName)
console.log(sana.lastName)
console.log(sana['age'])
console.log(sana['rollNo'])
console.log('-----------------------')


//***************add************** */
//dot notation
//bracket notation

sana.status="married"
sana['education']='bcs'
console.log(sana)

console.log('-----------------------')

//***************update************** */
//dot notation
//bracket notation

sana.fistName="fatima"
sana['lastName']="sayyad"

console.log(sana)
console.log('-----------------------')

//***************delete************** */
//dot notation
//bracket notation

delete sana.fistName
delete sana["lastName"]
console.log(sana)

