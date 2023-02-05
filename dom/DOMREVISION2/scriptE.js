
let liList = document.querySelectorAll('li')
console.log(liList)


for (let i = 0; i < liList.length; i++) {
    console.log(liList[i])
    if (i % 2==0) {
        liList[i].style.color='red'
    }
    else {
        liList[i].style.color='green'
    }

}