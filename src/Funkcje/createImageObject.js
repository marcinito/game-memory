export  const createImageObject=(howMany,arrayWithImagesToConvert,className="imagesToMatch")=>{
let arrayWithImages=[]

    for(let i=0;i<howMany;i++){
        const imgWithImagesToMatch=new Image(100,100)
        imgWithImagesToMatch.src=arrayWithImagesToConvert[i].img
        imgWithImagesToMatch.setAttribute("id",`${arrayWithImagesToConvert[i].id}`)
        imgWithImagesToMatch.classList.add(`${className}`)
        arrayWithImages.push(imgWithImagesToMatch)

      

    }
    return arrayWithImages

}