let ulList=document.querySelector('ul')
console.log(ulList)
let button=document.querySelector('button')
console.log(button)


button.addEventListener('click',function(){
ulList.style.color='red'
ulList.style.background='yellow'
ulList.style.width='100px'
ulList.style.height='100px'


})