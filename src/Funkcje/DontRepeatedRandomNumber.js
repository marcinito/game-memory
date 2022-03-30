export const DontRepeatedRandomNumber=(howMany)=>{
    let randomNumber=[]
    while(randomNumber.length<howMany){
        let random=parseInt(Math.random()*howMany)
        if(randomNumber.includes(random)===false){
            randomNumber.push(random)
        }
    }
    return randomNumber
}