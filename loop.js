////for loop

//symtax
//for(intiallizaton,condition check,increment/decrement){

//}

for (let i = 0; i < 5; i++) {
    console.log("hello")
    console.log("morning")
}

console.log('-------------')

//print 1to10number
for (let i = 1; i <= 10; i++) {  //2 //3 //4
    console.log(i) //1 //2 //3  //4
}

console.log('-----------------')

//print 10 to 1
for (let i = 10; i > 0; i--) {   // 9 //8
    console.log(i) //10  //9
}
console.log('-----------------')


//print the table for2
for (let i = 2; i <= 20; i = i + 2) {

    console.log(i)
}

console.log('-------------')


//break statment with for loop
for (let m = 0; m < 5; m++) {
    if (m == 2) {
        break
    }
    console.log(m)
}
console.log('------------')


for (let n = 0; n < 5; n++) {

    console.log(n)
    if (n == 2) {

        break
    }
}
console.log('-----------')


//continue statment
for (let i = 0; i < 5; i++) {  //0 //1  //2
    if (i == 3) {
        continue
    }
    console.log(i) //0,1,2,4
}

console.log('------------')

for (let h = 0; h < 5; h++) { //0,1,3,4
    if (h == 2) {
        continue
    }
    console.log(h) //0,1,2,3,4
}
console.log('---------------')

//table 4 
for (let i = 4; i <= 40; i = i + 4) {
    console.log(i)
}

console.log('-----------------------')

//while loop
//--------------syntax----------
//initialization
//while(condition){
//statement
//increment/decrement
//}

let i = 0
while (i < 3) {
    console.log('hello')
    console.log('bye')
    i++  //0,1,2
}
console.log('------------------')


//print from 1 to 10
let ss = 1
while (ss <= 10) {
    console.log(ss)
    ss++
}
console.log('---------------------')

//print from 10to 1
let rr = 10
while (rr > 1) {
    console.log(rr)
    rr--
}
console.log('------------------')


//table 2 using while loop
let f = 2
while (f <= 20) {
    console.log(f)
    f = f + 2
}
console.log('---------------')

//break statment
let t = 5
while (t > 0) {
    if (t == 2) {
        break
    }
    console.log(t) //5 ,4,3
    t--
}
console.log('-------------')

//table 3 using while loop
let g = 3
while (g <= 30) {
    console.log(g)
    g = g + 3
}
console.log('--------------')

//table 4 using while loop
let i1 = 4
while (i1 <= 40) {
    console.log(i1)
    i1 = i1 + 4
}
console.log('-------------------')







