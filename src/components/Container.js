import createElement from "../Funkcje/createElement"
import statementContent from "../Funkcje/statementContent"
import Content from "./Content"
import createOwnLevel from "./createOwnLevel"
import { Header } from "./Header"


export function Container(){
    const element=document.createElement("div")
    const play=createElement("button",["startGame"],"graj")
    const statement=createElement("div",["statement"])
    statement.innerHTML=statementContent()
 let flagGrajButton=false
    play.addEventListener("click",(e)=>{

        let content=document.querySelector(".content")
        let btnStartGame=document.querySelector(".startGame")
        if(flagGrajButton==false){

     if(window.innerWidth<=500){
    content.style.width=90+"%"
    content.style.opacity=1
   
   console.log("seima")
    btnStartGame.style.left=90+"%"
   
   
    statement.style.opacity=0
   
     }
     if(window.innerWidth>500 && window.innerWidth<717){
        content.style.width=80+"%"
        content.style.opacity=1
       
       console.log("seima")
        btnStartGame.style.left=80+"%"
      
       
        statement.style.opacity=0
       
     }


     if(window.innerWidth>718 && window.innerWidth<1400){
        content.style.width="80%"
        content.style.opacity=1
        btnStartGame.style.left=81+"%"
     
       
       
        statement.style.opacity=0
       
         }
         if(window.innerWidth>1400 && window.innerWidth<3000){
            content.style.width="80%"
            content.style.opacity=1
            btnStartGame.style.left=80.8+"%"
         
           
           
            statement.style.opacity=0
           
             }
    
         flagGrajButton=true


    return
        }
      if(flagGrajButton===true){
        content.style.width="0%"
        content.style.opacity=0
        btnStartGame.style.left=0+"%"
        flagGrajButton=false
        statement.style.opacity=1
        return
      }  
      
      
    })
    element.classList.add("container")
    element.appendChild(play)
    element.appendChild(statement)
    element.appendChild(Header())
    element.appendChild(Content())
  

   
    

    return element
}