import createElement from "../Funkcje/createElement";
import createPuzzle from "../Funkcje/createPuzzle";
import {imagesTofirstLevel,imagesToSecondLevel, imagesToThirdLevel} from '../Funkcje/ImagesToPuzzle'
import {DontRepeatedRandomNumber} from '../Funkcje/DontRepeatedRandomNumber'
import { Container } from "./Container";

///tdl-tablica determinujaca levele//

console.log(imagesToThirdLevel)

const tdl=[
    {quantity:8,nameLvl:"firstLevel",imgLvl:imagesTofirstLevel,mixImg:DontRepeatedRandomNumber(8)},
    {quantity:10,nameLvl:"secondLevel",imgLvl:imagesToSecondLevel,mixImg:DontRepeatedRandomNumber(10)},
    {quantity:12,nameLvl:"thirdLevel",imgLvl:imagesToThirdLevel,mixImg:DontRepeatedRandomNumber(12)}
]

export default function Content(){


    console.log(tdl)



const content=createElement("div",["content"])
const gameArea=createElement("div",["gameArea"])
content.appendChild(gameArea)

function makeGame(){
    let lvl=createPuzzle(tdl[0].quantity,tdl[0].nameLvl)
const {pak,containerPuzzel,cover}=lvl
let ArrayToCheckIfMatch=[]
pak.forEach((el,i,arr)=>{
    el.appendChild(tdl[0].imgLvl[tdl[0].mixImg[i]])
   el.appendChild(cover[i])
   console.log("Hejo")
    el.addEventListener("click",(e)=>{
        if(ArrayToCheckIfMatch.length<2){
        e.target.style.opacity=0
        const checkInside=[...pak[i].children]
      
       ArrayToCheckIfMatch.push(checkInside[0])
     
        }
      if(ArrayToCheckIfMatch.length===2){
          if(ArrayToCheckIfMatch[0].id===ArrayToCheckIfMatch[1].id){
              console.log("Wygrana")
            ArrayToCheckIfMatch[0].parentNode.setAttribute("trafiony","")
            ArrayToCheckIfMatch[1].parentNode.setAttribute("trafiony","")
              ArrayToCheckIfMatch=[]
              let checkIfEvryIsMatched=[...el.parentNode.children]
           checkIfEvryIsMatched=checkIfEvryIsMatched.every(el=>el.hasAttribute("trafiony")===true)
            if(checkIfEvryIsMatched===true){
                tdl.shift()
                console.log(tdl)
                gameArea.removeChild(gameArea.childNodes[0])
                console.log("why not?")
                makeGame()
            }  
          }
          else{
              console.log("Przegrana")
            pak.forEach((el,i,arr)=>{
                let checkInside=[...pak[i].children]
                if(pak[i].hasAttribute("trafiony")===false){
                    setTimeout(()=>{
                        checkInside[1].style.opacity=1
                        ArrayToCheckIfMatch=[]
                    },700)

                }
            })
            
          }
      }

        

    })
 
 
    containerPuzzel.appendChild(el)
})

gameArea.appendChild(containerPuzzel)
}

makeGame()

return content
}