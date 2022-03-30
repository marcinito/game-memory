import Content from "./Content"
import { Header } from "./Header"
export function Container(){
    const element=document.createElement("div")
    element.classList.add("container")
    element.appendChild(Header())
    element.appendChild(Content())
    

    return element
}