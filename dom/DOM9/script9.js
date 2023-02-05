let ulList = document.querySelector('ul')
console.log(ulList)
let inputBox = document.querySelector('input')
console.log(inputBox)
let buttonA = document.querySelector(' #addButton')
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let text = inputBox.value
    let newLi = document.createElement('li')   //<li></li>
    newLi.textContent = text
    createButton(newLi)
    ulList.appendChild(newLi)
    inputBox.value = " "
})



function createButton(li) {
    let remove = document.createElement('button')  //<Button></Button>
    remove.textContent = "Remove"                      //<Button>remove</Button>   
    remove.className = "remove"                     //<Button class="remove">remove<Button>
    li.appendChild(remove)
    console.log(li)

    let up = document.createElement('button')  //<Button></Button>
    up.textContent = "Up"                      //<Button>up</Button>   
    up.className = "up"                         //<Button class="up">up</Button>
    li.appendChild(up)



    let down = document.createElement('button')  //<Button></Button>
    down.textContent = "Down"                      //<Button>down</Button>   
    down.className = "down"                         //<Button class="down">down</Button>
    li.appendChild(down)
}




ulList.addEventListener('click', function (event) {
    // console.log(event.target)             //
     //console.log(event.target.tagname)    //tagname show
     // console.log(event.target.classname)  //classname show

    if (event.target.tagName === "BUTTON") {

        if (event.target.className === "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        
        else if (event.target.className === "up") {

            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            ul.insertBefore(li, prev)
        }

        else if (event.target.className === "down") {
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            ul.insertBefore(next, li)
        }
    }
})



