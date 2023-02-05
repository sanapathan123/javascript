// selecting the element

//<h3 class = "three" id = "four" name ="five">Hello</h3>

// css selector

// Tagname 
let tagName=document.querySelector('h3')
console.log(tagName)
  

//by #Idname

let byIdname=document.querySelector('#four')
console.log(Idname)

// ByClass

let byClassName=document.querySelector('.three')
console.log(byClassName)

//by  bycommonformula 

let bycommonformula=document.querySelector("h3['name=five']")
console.log(bycommonformula)
