export  const createImageObject=(howMany,arrayWithImagesToConvert)=>{
let arrayWithImages=[]

    for(let i=0;i<howMany;i++){
        const imgWithImagesToMatch=new Image(100,100)
        imgWithImagesToMatch.src=arrayWithImagesToConvert[i].img
        imgWithImagesToMatch.setAttribute("id",`${arrayWithImagesToConvert[i].id}`)
        imgWithImagesToMatch.classList.add("imagesToMatch")
        arrayWithImages.push(imgWithImagesToMatch)

      

    }
    return arrayWithImages

}