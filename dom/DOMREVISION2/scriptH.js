let liList = document.querySelector('li')
console.log(liList)

let ulList = document.querySelector('ul')
console.log(ulList)

let button = document.querySelector('#addButton')
console.log(button)

let inputText = document.querySelector('input')
console.log(inputText)




button.addEventListener("click", function () {
    text = inputText.value
    let newLi = document.createElement('li')  //<li></li>
    newLi.textContent = text                 //<li>fatima</li>
    createButton(newLi)
    ulList.appendChild(newLi)

    inputText.value = " "
})

function createButton(li) {
    let remove = document.createElement('button')
    remove.textContent = "Remove"   //<li>remove</li>
    remove.className = "Remove"      //<liclass="remove">remove</li>
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = "Up"
    up.className = "Up"
    li.appendChild(up)


    let down = document.createElement('button')
    down.textContent = "Down"
    down.className = "Down"
    li.appendChild(down)


}


ulList.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {

        if (event.target.className === "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
            console.log(ul)
}
    }




    if(event.target.className==="up"){
        let li=event.target.parentElement
        let ul=li.parentElement
        let prev=li.previousElementSibling
        ul.insertBefore(li,prev)
    }

    if(event.target.className=="down"){
        let li=event.target.parentElement
        let ul=li.parentElement
        let next=li.nextElementSibling
        ul.insertBefore(next,li)
    }
})

















