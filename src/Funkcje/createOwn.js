


export function createOwn(idImage,addImage){


let arrayWitAddImages=[]
    idImage.addEventListener("input",(e)=>{
        idImage.value=e.target.value
        console.log(e.target.value)
    })
// nameLevel.addEventListener("input",(e)=>{
//     nameLevel.value=e.target.value
//     console.log(e.target.value)
// })
addImage.addEventListener("input",(e)=>{
    
    addImage.value=e.target.value
    console.log(e.target.value)
})
    
}