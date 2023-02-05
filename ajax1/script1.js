
// function additionA(){
//     console.log("one")
// }

// function additionB(){
//     console.log("two")
//     alert("hello")
// }

// additionA()
// additionB()

//sync in nature

// function additionA(){
//     setTimeout(function(){
//     alert("helloA")
//     },2000)

//     function additionB(){
//         console.log("helloB")
//     }
// }
// additionA()
// additionB()


//api----------------user create

//user create------------id

//id create------------user info

//user create------>id get----->userinfo

function getInfo() {

    //async===>sync       //async method run one by one

    setTimeout(function () {
        console.log("user create")
    }, 3000)

    setTimeout(function () {
        console.log("id get")
    }, 2000)

    setTimeout(function () {
        console.log("userinfo")
    }, 1000)
}

// getInfo()


//call by hell------->async function can ecxecute synchronisally

//async===>sync

function getInfo() {
    setTimeout(function () {
        console.log("user create")
        setTimeout(function () {
            console.log("id get")
            setTimeout(function () {
                console.log(" get userinfo")

            }, 1000)
        }, 2000)
    }, 3000)
}

// getInfo()


// Promise====>async====>sync without  call backhell
//promise--->async code manage sync with proper way


let createuser = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user create")
        }, 3000)
    })
}


let getId = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("id get")
        }, 2000)
    })
}


let userInfo2 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user info")
        }, 1000)
    })
}


createuser()
.then(function(res){
console.log(res)
return getId()
}).then(function(res){
    console.log(res)
    return userInfo2()
}).then(function(res){
    console.log(res)
})





