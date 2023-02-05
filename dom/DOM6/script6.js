let ulList = document.querySelector('ul')
//console.log(ulList)

let inputText = document.querySelector('input')
//console.log(inputText)

let buttonA = document.querySelector('button')
//console.log(buttonA)


buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newElement = document.createElement('li')//<li></li>
    newElement.textContent=text                   //<li>chikoo</li>
    ulList.appendChild(newElement)             
})


