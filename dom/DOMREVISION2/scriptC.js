let ulList=document.querySelector('ul')
console.log(ulList)

let button=document.querySelector('button')
console.log(button)


button.addEventListener("click",function(){
    ulList.style.color='brown'
    ulList.style.background='aqua'
    
    ulList.style.height='150px'
    ulList.style.width='150px'
    

})