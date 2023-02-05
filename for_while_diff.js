//math
// console.log(Math.floor(12.3))   //12  //highest intrger 11.32
// console.log(Math.floor(12.4)) 

// console.log(Math.ceil(22.4))        //next value
// console.log(Math.ceil(33.2))

// console.log(Math.round(22.4))    //22  //0 to 4 same value.5 next value
// console.log(Math.round(22.5))        //23


// console.log(Math.random())        //0 to 1    eg=0.33     ,0.4
// console.log(Math.random()) 


// console.log(Math.random()*6)          //0 to 5.99,eg =5.12,4.98
// console.log(Math.random()*6) 

// console.log(Math.floor(Math.random()*6))  //0,1,2,3,4,5
// console.log(Math.floor(Math.random()*6))

// console.log(Math.floor(Math.random()*6)+1)
// console.log(Math.floor(Math.random()*6)+2)




//guess one time
//let randomNumber=Math.floor(Math.random()*6+1)  //7
//console.log(randomNumber)
//let userinput =prompt('enter any  number between 1 to 6')  //6
//if(randomNumber==userinput){
//  console.log('your guess is correct')
//}
//else{
//  console.log('your guess is incorrect')
//}
//console.log('-----------')

//guess 5 times (for loop)
//program 2

// let randomNumber= Math.floor(Math.random()*6+1)   //5
// console.log(randomNumber)
// for( let i=0;i<5;i++){
// let userinput=prompt('enter any number between 1 to 6')   //4,3//5
//  if(randomNumber==userinput){
//         console.log('your guess is correct ')
//        break
// }
//  else{
//     console.log('yours guess is incorrect,please try again')
//  }

//  }



//guess until  matches

//progrm3
// let randomNumber1=Math.ceil(Math.random()*6)+1     
//  console.log(randomNumber1)
//  let userinput=prompt('enter any number 1 to 6')

//  while(randomNumber1!=userinput){
//     userinput=prompt('enter any number 1 to 6')
//      if(userinput==randomNumber1){
//       console.log('your guess is correct')
//         break
//     }
//     else{
//         console.log('your guess is incorrect ,please try again')
//     }
//  }




// //program4

let randomNumber2 = Math.floor(Math.random() * 6) + 1
console.log(randomNumber2)
do {
  let userinput = prompt('please enter any number 1 to 6')
  if (randomNumber2 == userinput) {
    console.log('yours guess is correct')
    break
  }
  else {
    console.log('yours guess is incorrect ,please tr again')
  }
} while (userinput != randomNumber2) {
  let userinput = prompt('please enter any number 1 to 6')
}







