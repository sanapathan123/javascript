// sync execution           //sync execute one by one like clockwise

function additionA() {
    console.log("hello")
}

function additionB() {
    console.log("bye")
}
// additionB()
// additionA()


//Async     //async execute by one function is complete then run  like anticlockwise and time consuming


function additionC() {
    setTimeout(function () {
        console.log("hello")
    }, 1000)
}

function additionD() {
    console.log("bye")
}

// additionC()
// additionD()



// api----------usercreate

// usercreate-------id

// id fetch--------userinfo

function getInfo() {
    setTimeout(function () {
        console.log("user created")
    }, 3000)


    setTimeout(function () {
        console.log("id")
    }, 2000)


    setTimeout(function () {
        console.log("userinfo")
    }, 1000)
}

// getInfo()

// asyc function execut sync
// call backhell

// Es2015-------promise
// async call sycn execution in better way by removing call backhell

// basic promise

//  let pro = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 10

//     if (a == b) {
//         resolve("hello")
//     } else {
//         reject("bye")
//     }

// })

// // consuming the promise
// pro.then(function (a) {
//     console.log(a)
// }), function (b) {
//     console.log(b)
// }



let pro = new Promise(function (resolve, reject) {
    let a = 100
    b = 100

    if (a == b) {
        resolve([11, 22, 33])
    } else {
        reject([-11, -22, -33])


    }

})

pro.then(function (a) {
    console.log(a[0])
}, function (b) {
    console.log(b[0])

})


let pro2 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 100
    if (a == b) {
        resolve([11, 22, 33])

    } else {
        reject([-11, -22, -33])
    }
})
pro2.then(function (a) {
    console.log(a[0])
}).catch(function (b) {
    console.log(b[0])
})
    .finally(function () {
        console.log('i will execute')
    })


function getInfo() {
    setTimeout(function () {
        console.log('user create')
        setTimeout(function () {
            console.log('id')
            setTimeout(function () {
                console.log('user info')
            }, 1000)
        }, 2000)
    }, 3000)
}
getInfo()


function createUser() {
    return new Promise(function (resolve, reject) {
      setTimeout(function(){
        resolve('create user')
      },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setInterval(function(){
            resolve('id')
        },2000)
    })
}

function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(' info')
        },3000)
    })
}
createUser().then(function(a){
    console.log(a)
    return getId()
}).then(function(b){
    console.log(b)
    return userInfo()
}).then(function(c){
    console.log(c)
    
})

async function getUserInfo(){
    let a=await createUser()
    console.log(a)
    let b=await getId()
    console.log(b)
    let c=await userinfo()
    console.log(c)
}