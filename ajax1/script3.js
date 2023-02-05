// sync vs async


function addtion() {
    console.log('one')
}
function addition2() {
    console.log('two')
}
addition2()
addtion()



//sync

function addA() {
    setTimeout(function () {
        console.log('hello')
    }, 3000)
}
function addB() {
    console.log('bye')
}

addA()
addB()



function getUserInfo() {
    setTimeout(function () {
        console.log("user create")
    }, 3000)

    setTimeout(function () {
        console.log('getid')
    }, 2000)

    setTimeout(function () {
        console.log('user info')
    }, 1000)
}

// getUserInfo()

//async execute sync

function getUserInfo() {
    setTimeout(function () {
        console.log("user create")

        setTimeout(function () {
            console.log('getid')

            setTimeout(function () {
                console.log('user info')
            }, 1000)

        }, 2000)

    }, 3000)
}

// getUserInfo()

// promise---->

// pending resolve reject

// let pro=new Promise(function(resolve,reject){
//     let a=10
//     let b=10
//     if(a==b){
//         resolve("hello")
//     }else{
//         reject('bye')
//     }
// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


let pro=new Promise(function(resolve,reject){
    let a=10
    let b=100
    if(a==b){
        resolve("hello")
    }else{
        reject('bye')
    }
})
pro.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

let pro2 = new Promise(function(resolve,reject){
        let a = 10
        let b = 100
        if(a == b){
            resolve('hello')
        }
        else {
            reject('bye')
        }
    
    })
    pro2.then(function(str){
        console.log(str)
    })
    .catch(function(str){
        console.log(str)
    })
    .finally(function(){
        console.log('I will learn anyhow')
    })


// *************smj nhi aya*******************


let pro3= new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve('hello')
    }
    else {
        reject('bye')
    }

})
pro3.then(function(str){
    console.log(str) // 'hello'
    return 9
})
.then(function(a){
        console.log(a) // 9
        return "hello2"
    })
    .then(function(b){
        console.log(b)
    })
    .catch(function(str){
        console.log(str)
    })
    .finally(function(){
        console.log('I will learn anyhow')
    })
    
// ************************************************//



    // call back hello solution


    function getUserInfo() {
        setTimeout(function () {
            console.log('user creation')
            setTimeout(function () {
                console.log('get id')
                setTimeout(function () {
                    console.log('get info')
                }, 1000)
    
            }, 2000)
    
        }, 3000)
    }
    getUserInfo()

    function createUser(){
        return  new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('user created')
            },3000)
        })
    }
    
    function getId(){
        return  new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('id received')
            },2000)
        })
    }
    function getInfo(){
        return  new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('user info')
            },1000)
        })
    }
    
    createUser().then(function(str){
        console.log(str)
        return getId()
    })
    .then(function(str){
        console.log(str)
        return getInfo()
    }).then(function(str){
        console.log(str)
    })


    // 2015
createUser().then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return getInfo()
}).then(function(str){
    console.log(str)
})


// async await    //one execute and then wait 

async function getUserInfo(){
    let a = await createUser()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}
getUserInfo()

async function getUserInfo(){
    let a = await createUser()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfo()
    return c
}
let d = getUserInfo()
d.then(function(str){
    console.log(str)
})  



