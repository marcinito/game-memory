export default function validationInputMini(whatConcer,placeholderText){
whatConcer.style.border="3px solid yellow"
    whatConcer.value=""
    whatConcer.placeholder=`${placeholderText}`
    whatConcer.style.backgroundColor="red"

    setTimeout(()=>{
        whatConcer.style.border=""
        whatConcer.value=""
        whatConcer.placeholder=""
        whatConcer.style.backgroundColor=""
    },1000)
}