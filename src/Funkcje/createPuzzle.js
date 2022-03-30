import createElement from "./createElement";
import znak from '../img/znak.png'
export default function createPuzzle(howMany,whichLevel){

    let pak=[]
    let cover=[]
   
  
    const containerPuzzel=createElement("div",[`${whichLevel}`])

    for(let i=0;i<howMany;i++){
        const imgCover=new Image(100,100)
        imgCover.src=znak
        imgCover.classList.add("imgCover")
        const puzzel=createElement("div",[`puzzel${i}`,"puzzel"])
        pak.push(puzzel)
        cover.push(imgCover)
     
    }
    
    return {pak,containerPuzzel,cover}
}