let ulList=document.querySelector('ul')
console.log(ulList)

let button=document.querySelector('button')
console.log(button)

let inputText=document.querySelector('input')
console.log(inputText)

button.addEventListener("click",function(){
    text=inputText.value
    ulList.style.color=text
    inputText.value=""
})