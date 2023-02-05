// selecting the element

//<h3 id="four" class="five" name="nm">Hello</h3>

// css selector

// Tagname 
let tagName=document.querySelector('h3')
console.log(tagName)
  

//by #Idname

let byIdname=document.querySelector('#four')    ///id used for uniqe element 
console.log(Idname)

// ByClass

let byClassName=document.querySelector('.five')///class used for multiple element specifefy
console.log(byClassName)

//by  bycommonformula 

let bycommonformula=document.querySelector("h3['name=five']")
console.log(bycommonformula)


