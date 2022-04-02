import createElement from "../Funkcje/createElement";

import { createImageObject } from "../Funkcje/createImageObject";
import createPuzzle from "../Funkcje/createPuzzle";
import {imagesTofirstLevel,imagesToSecondLevel, imagesToThirdLevel} from '../Funkcje/ImagesToPuzzle'
import {DontRepeatedRandomNumber} from '../Funkcje/DontRepeatedRandomNumber'
import { Container } from "./Container";
import createOwnLevel from "./createOwnLevel";
import { createOwn } from "../Funkcje/createOwn";
import validationInputMini from "../Funkcje/validationInputMini";
import { add } from "lodash";

///tdl-tablica determinujaca levele//

console.log(imagesToThirdLevel)



const tdl=[
    {quantity:8,nameLvl:"firstLevel",imgLvl:imagesTofirstLevel,mixImg:DontRepeatedRandomNumber(8)},
    // {quantity:10,nameLvl:"secondLevel",imgLvl:imagesToSecondLevel,mixImg:DontRepeatedRandomNumber(10)},
    // {quantity:12,nameLvl:"thirdLevel",imgLvl:imagesToThirdLevel,mixImg:DontRepeatedRandomNumber(12)}
]

export default function Content(){

  
console.log(tdl)


const content=createElement("div",["content"])
const gameArea=createElement("div",["gameArea"])

content.appendChild(gameArea)

function makeGame(){
    let lvl=createPuzzle(tdl[0].quantity,tdl[0].nameLvl)
const {arrayWithSinglePuzzel,containerPuzzel,cover}=lvl
let ArrayToCheckIfMatch=[]

arrayWithSinglePuzzel.forEach((el,i,arr)=>{
    //Adding new puzzle to Dom and cover image//
    el.appendChild(tdl[0].imgLvl[tdl[0].mixImg[i]])
   el.appendChild(cover[i])
   
    el.addEventListener("click",(e)=>{
        console.log(e.target)
        console.log()
        if(ArrayToCheckIfMatch.length<2){
        e.target.style.opacity=0
        const checkInside=[...arrayWithSinglePuzzel[i].children]

       ArrayToCheckIfMatch.push(checkInside[0])
     
        }
      if(ArrayToCheckIfMatch.length===2){
          if(ArrayToCheckIfMatch[0].id===ArrayToCheckIfMatch[1].id &&
             ArrayToCheckIfMatch[0].parentNode.getAttribute("class")!==ArrayToCheckIfMatch[1].parentNode.getAttribute("class")){
              //action after match puzzel//
                console.log("Wygrana")
            ArrayToCheckIfMatch[0].parentNode.setAttribute("trafiony","")
            ArrayToCheckIfMatch[1].parentNode.setAttribute("trafiony","")
              ArrayToCheckIfMatch=[]
              console.log(el.parentNode.children)
              let checkIfEvryIsMatched=[...el.parentNode.children]
           checkIfEvryIsMatched=checkIfEvryIsMatched.every(el=>el.hasAttribute("trafiony")===true)
            if(checkIfEvryIsMatched===true){
                tdl.shift()
                console.log(gameArea.childNodes[0])
                gameArea.removeChild(gameArea.childNodes[0])
              


                if(tdl.length>0){
                    makeGame()
                }
                //if array with level are empty show panel to create own level//
                else{
                    let arrayWitAddImages=[]
                    let ownLevel
                    const content=document.querySelector(".content")
                    content.appendChild(createOwnLevel())
                    const wrapperToAddOwnLevel=document.querySelector(".boxToCreateOwnLevel")

                    const exampleImagesToAdd=document.querySelector(".exampleImagesToAdd")
                    const exampleImagesContainer=document.querySelector(".exampleImagesToAdd")
console.log(exampleImagesContainer)
                    const idImage=document.getElementById("idImage")
                    const addImage=document.getElementById("addImage")
                    const btnAddImage=document.querySelector(".btnAddImage")
                    const btnAddLevel=document.querySelector(".btnAddLevel")
                    const btnStart=document.querySelector(".btnStart")
                    createOwn(idImage,addImage)

                  let addExampleImage=[...exampleImagesToAdd.children]
                  console.log(addExampleImage)

                  ///Paste link to addImage textarea  by click on proposal image//
                  addExampleImage.forEach((el,i,arr)=>{
                    el.addEventListener("click",(e)=>{
                        arr.forEach(el=>{
                            el.style.border="none"
                            el.style.borderRadius=`0%`
                            el.style.transform=`none`
                        })
                        e.target.style.border="3px solid green"
                        e.target.style.transform=`scale(1.2)`
                        e.target.style.borderRadius=`50%`
                        addImage.value=""
                        idImage.value=""
                        let src=e.target.src
                        let id=e.target.id
                        idImage.value=id
                        addImage.value=src
                    })
                  })

                    btnAddImage.addEventListener("click",()=>{
 //Check if you are try add existing image in your level , to prevent add more than one the same image//
let flag=false
arrayWitAddImages.forEach((el,i,arr)=>{
    if(el.img===addImage.value){
        flag=true
    }
})
           
                        if(addImage.value.substring(0,4)==="http" 
                        &&idImage.value.length>0 && flag===false){


                        arrayWitAddImages.push({img:addImage.value,id:idImage.value})
                        console.log(arrayWitAddImages)
                        
       

                        addImage.value=""
                        idImage.value=""


                     return
                        }
                       
                     if(idImage.value.length===0){validationInputMini(idImage,"To pole nie może być puste")}
                      if(addImage.value.length===0){validationInputMini(addImage,"To pole nie może być puste")}
                      if(addImage.value.substring(0,4)!=="http" && addImage.value.length>1){validationInputMini(addImage,"To nie jest adres obrazka")}
                        if(flag===true){
                            validationInputMini(addImage,"Ten obrazek już istnieje w tworzonym poziomie")
                            flag=false
                            addExampleImage.forEach(el=>{
                                el.style.transform="none"
                                el.style.border="none"
                                el.style.borderRadius="0%"
                            })
                        }
                        
                    })
                    //Function serve as creator to new object with new level//
                    function createNewLevel(ilosc,name,obrazki){
                        let newLevel={quantity:ilosc,nameLvl:"ownLevel",imgLvl:obrazki,mixImg:DontRepeatedRandomNumber(ilosc)}
                        return newLevel
                        }
                      //Add new object with new Level//
                      let flag=false
                    btnAddLevel.addEventListener("click",()=>{
                        if(arrayWitAddImages.length>1){
                        arrayWitAddImages=arrayWitAddImages.concat(arrayWitAddImages)
                        arrayWitAddImages=createImageObject(arrayWitAddImages.length,arrayWitAddImages)
                    ownLevel=createNewLevel(arrayWitAddImages.length,"ownLevel",arrayWitAddImages)
                    console.log(ownLevel)
                        console.log(arrayWitAddImages)
                    arrayWitAddImages=[]
                    tdl.push(ownLevel)
                    validationInputMini(addImage,"LEVEL ZOSTAŁ DODANY")
                    flag=true
                        }
                        else{
                            if(arrayWitAddImages.length<2)
                            {validationInputMini(addImage,"Musisz dodac przynajmniej 2 obrazki")}
                           
                        }
                    })
//Launch game agin with new added lvl//
                    btnStart.addEventListener("click",()=>{
                        console.log(flag)
                        if(flag===true){
                      wrapperToAddOwnLevel.remove()
                     makeGame()
                     idImage.value=""
                     addImage.value=""
                     flag=false
                        }
                        else{
                           validationInputMini(btnAddLevel,"")
                        }
                    })   
                }
            }  
          }
          else{
              console.log("Przegrana")
            arrayWithSinglePuzzel.forEach((el,i,arr)=>{
                let checkInside=[...arrayWithSinglePuzzel[i].children]
                if(arrayWithSinglePuzzel[i].hasAttribute("trafiony")===false){
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