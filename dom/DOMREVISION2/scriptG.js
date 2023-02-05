//<button id="four" class="five" name="nm">Hello</button>


let byid=document.querySelector('#four')
console.log(byid)

let byclass=document.querySelector('.five')
console.log(byclass)

let bycomonformula=document.querySelector("button[name='nm']")
console.log(bycomonformula)

let button=document.querySelector('button')
console.log(botton)

body.addEventListener("click",function(event){
    console.log(event.target)

    console.log(event.target.tagName)

    console.log(event.target.className)
})
