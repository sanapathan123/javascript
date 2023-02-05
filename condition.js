//conditional statement
//either treu or false
//if(condition){

//}
//else{

//}
//when??=====>when single input multiple output

//input----numberofticket=====>1 to 5=========>10%
//input----numberofticket=====> 5 > && < =10 =====>20%
//input----numberofticket=====> 10 > =========>50%

//program1    if() -all conditions check

let numberOfTicket = 5

if (numberOfTicket > 0 && numberOfTicket <= 5) {
    console.log('10%discount')
}


if (numberOfTicket >= 5 && numberOfTicket <= 10) {
    console.log('20%discount')
}

if (numberOfTicket > 10) {
    console.log('50%discount')
}

console.log('--------------')

//program2   else if- first condition satisfy do not go next condition 

let numberOfTicket2 = 10

if (numberOfTicket2 > 0 && numberOfTicket2 <= 5) {
    console.log('10%discount')
}


else if (numberOfTicket2 >= 5 && numberOfTicket2 <= 10) {
    console.log('20%discount')
}

else if (numberOfTicket2 > 10) {
    console.log('50%discount')
}
else {
    console.log('incorrect input')
}

console.log('--------------')


//FALSY VALUE -null,undefined,NAN,0,false,9!==9
//TRUTHY VALUE-'a','sana',1,-2,'@',true,9==9

if (9 == 9) {
    console.log('hello')
}
else {
    console.log('bye')
}

console.log('------------')

if (true) {
    console.log('hello')
}
else {
    console.log('bye')
}

console.log('----------')

if ("hello") {
    console.log('hello')
}
else {
    console.log('bye')
}

console.log('-------------')

if (-1) {
    console.log('bye')
}
else {
    console.log('hello')
}

console.log('----------')

if (1) {
    console.log('bye')
}
else {
    console.log('hello')
}
console.log('---------')

if ('A') {
    console.log('hii')
}
else {
    console.log('bye')
}

console.log('----------')

if (9 !== 9) {
    console.log('hii')
} else {
    console.log('bye')
}
console.log('------')


if (false) {
    console.log('hii')
}
else {
    console.log('bye')
}

console.log('-------------')

if (undefined + undefined) {
    console.log('hii')
}
else {
    console.log('bye')
}
console.log('------------')



if (0) {
    console.log('hii')
}
else {
    console.log('bye')
}

console.log('-------------')


if (null) {
    console.log('hii')
}
else {
    console.log('bye')
}

console.log('-------------')

let a
if (a) {
    console.log('hii')
}
else {
    console.log('bye')
}

console.log('-------------')


//SWITCH() CASE
let city = 'bhopal'
switch (city) {
    case 'pune':
        console.log('MH')
    case "bhopal":
        console.log('MP')
    case "lucknow":
        console.log('UP')
    default:
        console.log('incorrect city')

}
console.log('------------')

let city2 = 'pune'
switch (city2) {
    case 'pune':
        console.log('MH')
    case "bhopal":
        console.log('MP')
    case "lucknow":
        console.log('UP')
    default:
        console.log('incorrect city')

}

console.log('------------')

let city3 = ''
switch (city3) {
    case 'pune':
        console.log('MH')
    case "bhopal":
        console.log('MP')
    case "lucknow":
        console.log('UP')
    default:
        console.log('incorrect city')

}
console.log('------------')

//SWITCH CASE USING BREAK STATEMNT
let city4 = 'pune'
switch (city4) {
    case "pune":
        console.log('MH')
        break
    case "bhopal":
        console.log('MP')
        break
    case "lucknow":
        console.log('UP')
        break
    default:
        console.log('incorrect city')

}
console.log('------------')

let city5 = 'lucknow'
switch (city5) {
    case 'pune':
        console.log('MH')
    case "bhopal":
        console.log('MP')
    case "lucknow":
        console.log('UP')
    default:
        console.log('incorrect city')

}
console.log('------------')

//SWITCH CASE USING MULTIPLE CASES
let city6 = 'mumbai'
switch (city6) {
    case 'pune':
    case "mumabi":
        console.log('MH')
    case "bhopal":
    case " muadha":
        console.log('MP')
    case "lucknow":
    case " kanpur":
        console.log('UP')
    default:
        console.log('incorrect city')

}
console.log('------------')


let city7 = 'mumbai'
switch (city7) {
    case 'pune':
    case "mumbai":
        console.log('MH')
    case "bhopal":
    case " muadha":
        console.log('MP')
    case "lucknow":
    case " kanpur":
        console.log('UP')
    default:
        console.log('incorrect city')

}
console.log('------------')