export default function createElement(sortElement,className,textContent=null,attribute=null){
 const element=document.createElement(`${sortElement}`)

 element.classList.add(`${className[0]}`)
 if(className.length>1){
    element.classList.add(`${className[1]}`)
 }

 element.textContent=textContent
return element
}