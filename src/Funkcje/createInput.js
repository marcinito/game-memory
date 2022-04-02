import createElement from "./createElement"

export default function createInput(sort,type,id,labelTextContent){
    const wrapperInput=createElement("div",["wrapperInput"])
    const br=createElement("br",["br"])
    const input=document.createElement(`${sort}`)
    input.setAttribute("type",`${type}`)
    input.setAttribute("id",`${id}`)
    input.setAttribute("value","")
    const label=document.createElement("label")
    label.textContent=labelTextContent
    label.htmlFor=`${id}`
    wrapperInput.appendChild(label)
    wrapperInput.appendChild(br)
    wrapperInput.appendChild(input)
    



    return wrapperInput
    
}