export function deleteStyleFromAddExampleImage(array){
    array.forEach(el=>{
        el.style.transform="none"
        el.style.border="none"
        el.style.borderRadius="0%"
    })
}