//<button id="one" class="two" name="nm">Add me</button>

 let byid=document.querySelector('#one')
console.log(byid)
 let byclass=document.querySelector(".two")
console.log(byclass)
let buttonA=document.querySelector("buttonA")
console.log(buttonA)
 let comonformula=document.querySelector("button[name='nm']")
console.log(comonformula)

let body=document.querySelector("body")
console.log(body)

body.addEventListener('click',function(event){
    console.log(event.target)  
    console.log(event.target.tagname)
    console.log(event.target.classname)
})


