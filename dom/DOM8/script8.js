let ulList = document.querySelector('ul')

let inputBox = document.querySelector('input')

let buttonA = document.querySelector('#addButton')
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let text = inputBox.value
    let newLi = document.createElement('li')  //<li></li>
    newLi.textContent = text
    createButton(newLi)
    ulList.appendChild(newLi)
    inputBox.value = " "
})



function createButton(li) {
    let remove = document.createElement('button')  //<Button></Button>
    remove.textContent = "remove"                      //<Button>remove</Button>   
    remove.classname = "remove"                         //<Button class="remove">remove</Button>
    li.appendChild(remove)


    let up = document.createElement('button')  //<Button></Button>
    up.textContent = "up"                      //<Button>up</Button>   
    up.classname = "up"                         //<Button class="up">up</Button>
    li.appendChild(up)



    let down = document.createElement('button')  //<Button></Button>
    down.textContent = "down"                      //<Button>down</Button>   
    down.classname = "down"                         //<Button class="down">down</Button>
    li.appendChild(down)
}
























