import createElement from "../Funkcje/createElement";

export function transitionFromLevelToLevel(){
    const element=createElement("div",["transitionContainer"])
    const textWhenPassLevel=createElement("h1",["textWhenPassLevel"],"You are Win!")
    const info=createElement("h4",["waitNextLvl"],"Wait for next level")
    const box=createElement("div",["boxLoading"])
    const one=createElement("div",["oneLoading"])
    const two=createElement("div",["twoLoading"])
    const three=createElement("div",["threeLoading"])
    const four=createElement("four",["fourLoading"])
    box.appendChild(one)
    box.appendChild(two)
    box.appendChild(three)
    box.appendChild(four)
    element.appendChild(textWhenPassLevel)
    // element.appendChild(info)
    element.appendChild(box)

    return element
}