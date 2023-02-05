let info = {
    firstName: 'sana',
    lastName: 'sayyad',
    rollNo: 21,
    age: 23

}
//retrive
//(dot notation)
console.log(info.firstName)
console.log(info.lastName)
console.log('----------------------')



//bracket notation
console.log(info['rollNo'])

console.log(info['age'])
console.log('----------------------')



//update
//dot Notification
info.firstName = 'arif'
info.lastName = 'pathan'
console.log(info)
console.log('----------------------')



//bracket notation
info['rollNo'] = 23
info['age'] = 25
console.log(info)
console.log('----------------------')


//add
//dot notation
info.color = 'fair'
info.height = 5.1
console.log(info)
console.log('----------------------')


//bracket noatattion
info['degree'] = 'bcs'
info['situation'] = 'married'
console.log(info)
console.log('----------------------')


//delete
//dot notation
delete info.firstName
delete info.lastName
console.log(info)
console.log('----------------------')


//bracket notation
delete info['age']
delete info['rollNo']
console.log(info)
console.log('----------------------')



let arr = ['sana', 'arif', 'asim']
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])

}
console.log('----------------------')



let vehicle = {
    color: 'black',
    regNo: 21,
    city: 'mumbai',
    state: 'MH'
}

//console.log(vehicle.color)  ********not
//console.log(vehicle['regNo'])

for (let prop in vehicle) {
    console.log(prop, vehicle[prop])
}


let info2 = {
    firstName: 'sana',
    lastName: 'sayyad',
    city: 'ghargav',
    sublings: {
        brother: 'sameer',
        sister: 'nilofer'

    },
    skills: ['javascrift', 'python', 'css']
}
console.log(info2)
console.log(info2.firstName)
console.log(info2['lastName'])
console.log(info2.sublings.brother)
console.log(info2.skills.length)
console.log(info2.skills[2])
console.log(info2.skills[info2.skills.length - 1])
console.log('----------------------')



let student = [
    {
        firstName: 'sana',
        lastName: 'pathan',
        skills: ['javascrift', 'css', 'python']
    },
    {
        firstName: 'arif',
        lastName: 'sayyad',
        skills: ['javascrift', 'css', 'python', 'java']

    },
    {
        firstName: 'asim',
        lastName: 'sayyad',
        skills: ['javascrift', 'css',]
    }
]
//console.log(student)

student.forEach(function (el) {
    console.log(`$ {el.firstName}:$ {el.skills.length}`)
})

console.log(student[0].firstName)
console.log(student[1].skills.length)
console.log(student[2].lastName)
console.log(student[2].skills.length)
console.log('----------------------')



let info3 = [
    {
        firstName: 'sana',
        lastName: 'pathan',
        rollNo: 5,
        id: 1,
        Age: 23,
        kills: ['javascrift', 'css', 'python'],
        city: 'rajapur'
    },
    {
        firstName: 'arif',
        lastName: 'sayyd',
        rollNo: 25,
        id: 2,
        Age: 27,
        kills: ['javascrift', 'css', 'python', 'html'],
        city: 'ghargav'
    },
    {
        firstName: 'asim',
        lastName: 'sayyad',
        rollNo: 1,
        id: 3,
        Age: 10,
        kills: ['javascrift', 'css'],
        city: 'ghargav'
    },
    {
        firstName: 'sameer',
        lastName: 'pathan',
        rollNo: 20,
        id: 4,
        Age: 25,
        kills: ['javascrift', 'css', 'python'],
        city: 'rajapur'
    }
]

info3.forEach(function (el) {
    console.log(`${el.firstName}:${el.lastName}`)
})

//search people wuth rajapur city
info3.forEach(function (el) {
    if (el.city === 'rajapur') {
        console.log(el.firstName)
    }
})


let aa = info3.filter(function (el) {
    return el.city == 'ghargav'
})
console.log(aa)
console.log('----------------------')


//search 1st people with rajapur city

let ab = info3.find(function (el) {
    return el.city == 'ghargav'
})
console.log(ab)
console.log('----------------------')


//print name of user with numbers of skill
let ac = info3.forEach(function (el) {
    console.log(el.firstName, el.kills.length)

}
)
console.log(ac)
console.log('----------------------')



//perso with city ghargav and skills java

let ad = info3.forEach(function (el) {
    if (el.city === 'ghargav' && el.kills.includes('html'))
        console.log(el.firstName)
})



console.log(ad)


let as = info3.filter(function (el) {
    return el.city == 'ghargav' && el.kills.includes('html')
})
console.log(as)
console.log('----------------------')



//average age of all student
let totalAge = info3.reduce(function (acc, el) {
    return acc + el.Age
}, 0)
console.log(totalAge / info3.length)
console.log('----------------------')


//student above 20 age
let pq = info3.filter(function (el) {
    return el.Age > 20
})
console.log(pq)
console.log('----------------------')


//student with python and javascrift
//let xy=info3.forEach(function(el){
//if(el.kills.includes('python')&&el.kills.includes('javascrift')){
// console.log(el.firstName)
// }

//})

let xy = info3.filter(function (el) {
    if (el.kills.includes('python') && el.kills.includes('javascrift')) {
        console.log(el.firstName)
    }

})
console.log('----------------------')


//student who's name starts with "a"
let op = info3.filter(function (el) {
    if (el.firstName.startsWith('a')) {
        console.log(el.firstName)
    }
})
console.log('----------------------')


//stuent name who's firstname has more than 6character

let mn = info3.filter(function (el, index) {
    if (el.firstName.length > 5) {
        console.log(el.firstName)
    }
})










































