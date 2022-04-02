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
    let flag=false
    play.addEventListener("click",(e)=>{

        let content=document.querySelector(".content")
        let btnStartGame=document.querySelector(".startGame")
        if(flag===false){
        content.style.transition=`all 3s`
        if(window.innerWidth<500){
            content.style.width=100+"%"
        btnStartGame.style.left=`100%`
       


        }else{
            content.style.width=85+"%"
            btnStartGame.style.left=`80%`

        }
        
        if(window.innerWidth<700){
            content.style.width=90+"%"
           
        btnStartGame.style.left=`90%`
       


        }else{
            content.style.width=85+"%"
            btnStartGame.style.left=`80%`

        }
        if(window.innerWidth>700){
            content.style.width=90+"%"
           
        btnStartGame.style.left=`90%`
       


        }else{
            content.style.width=85+"%"
            btnStartGame.style.left=`80%`

        }


        content.style.opacity=1;
        btnStartGame.style.opacity=0
        
        setTimeout(()=>{
btnStartGame.style.opacity=1
        },3000)
   
        statement.style.transition=`all 3s`
        statement.style.opacity=0
    }

    if(flag===true){
    
        content.style.transition=`all 3s`
        content.style.width=0+"%"
        content.style.opacity=0;
        btnStartGame.style.opacity=0
        btnStartGame.style.left=`0%`
        setTimeout(()=>{
btnStartGame.style.opacity=1
        },3000)
   
        statement.style.transition=`all 3s`
        statement.style.opacity=1


    }
      flag=!flag
    })
    element.classList.add("container")
    element.appendChild(play)
    element.appendChild(statement)
    element.appendChild(Header())
    element.appendChild(Content())
  

   
    

    return element
}