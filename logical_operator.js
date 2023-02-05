//type--object----property and method

//human---amol----weight,height ,walk(),talk()

//vehicle------audi--color,sadane,start(),stop()

//bank acc----sana---bal,accNo,deposit(),withdraw())



///number--->0,1,2,3,4,5

//string-------->collection of characters "sana"

//boolean------->true or false

let x = 10
console.log(typeof x)
console.log('---------------')

let y = "sana"
console.log(typeof y)
console.log('-------------')


let z = true
console.log(typeof z)
console.log('---------------')


//compsrision operator
//<,>,<=,>=,!=,==,===,!==
//entity<entity--->boolean(either true or false)


console.log(3 > 2)
console.log('---------------')

console.log(6 > 7)
console.log('---------------')

console.log(8 > 7)
console.log('---------------')


console.log(5 >= 5)
console.log('---------------')

console.log(5 <= 5)
console.log('---------------')

console.log(7 != 7)
console.log('---------------')

console.log(7 == 7)
console.log('---------------')

console.log(7 == '7') //true//only value anot not type
console.log('----------')


console.log(7 === '7')  //false //both value and type 

console.log(typeof '7')  //string

console.log(typeof 7)   //number

//'7'===>string

//7====>number

console.log(7 == '7')


console.log(7 !== 7) //value and typr 
console.log('---------------')

console.log(7 !== '7') //value and type
console.log('---------------')

console.log(7 === 7)  // value
console.log('---------------')

console.log(7 == '7')  //type and value
console.log('---------------')

console.log(8 == '8') //value and type
console.log('---------------')

console.log(6 === 7) //value and type
console.log('---------------')



//logical
//OR  AND NOT

//AND  &&
//TRUE  TRUE--->TRUE
//TRUE  FALSE--->FALSE
//FALSE TRUE--->FALSE
//FALSE  FALSE--->FALSE


//OR  ||
//TRUE  TRUE--->TRUE
//TRUE  FALSE--->TRUE
//FALSE TRUE--->TRUE
//FALSE  FALSE--->FALSE

//NOT !
//TRUE--->FALSE
//FALSE--->TRUE


//AND  &&
//TRUE  TRUE--->TRUE
console.log(7 > 6 && 8 == 8)
//TRUE  FALSE--->FALSE
console.log(8 == 8 && 9 !== 9)
//FALSE TRUE--->FALSE
console.log(7 != 76 && true)
//FALSE  FALSE--->FALSE
console.log(7 === 7 && 2 === '2')

console.log('-----------------')


//OR
//TRUE  TRUE--->TRUE
console.log(true || true)
//TRUE  FALSE--->TRUE
console.log(7 === 7 || 7 != 7)
//FALSE TRUE--->TRUE
console.log(6 !== 6 || 5 == '5')
//FALSE  FALSE--->FALSE
console.log(7 !== 7 || 8 > 9)
console.log('------------------')

//NOT !
//TRUE--->FALSE
console.log(!true)
//FALSE--->TRUE
console.log(!true)

console.log('-----------------')


let a = 100
b = 50
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a % b)

console.log('------------------')

//logical function)
//AND(&&)
console.log(3 < 1 && 3 <= 3)
console.log(3 < 1)
console.log(3 <= 3)
console.log('-----------------')




////OR(||)
console.log(5 > 2 || 5 >= 7)
console.log(9 > 8 || 8 == 2)
console.log('-------------')



//NOT(!)
console.log(!(3 >> 1))