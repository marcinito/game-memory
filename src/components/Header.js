import createElement from "../Funkcje/createElement"
export function Header(){
    const header=createElement("div",["header"])
    const box=createElement("div",["box"])
    const one=createElement("div",["one","cubic"])
    const two=createElement("div",["two","cubic"])
    const three=createElement("div",["three","cubic"])
    const four=createElement("div",["four","cubic"])
    const h1=createElement("h1",["motoPage"],'Train you Memory')
   
box.appendChild(one)
box.appendChild(two)
box.appendChild(three)
box.appendChild(four)
    header.appendChild(box)
    header.appendChild(h1)
    return header

}