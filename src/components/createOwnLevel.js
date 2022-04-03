import createElement from "../Funkcje/createElement";
import { createImageObject } from "../Funkcje/createImageObject";
import createInput from "../Funkcje/createInput";
import { DontRepeatedRandomNumber } from "../Funkcje/DontRepeatedRandomNumber";
import { arrayExampleImage } from "../Funkcje/ImagesToPuzzle";
export default function createOwnLevel(){
console.log(arrayExampleImage)
const boxToCreateOwnLevel=createElement("div",["boxToCreateOwnLevel"])
// const wrapper=createElement("div",["wrapperCreateOwn"])
    const h1=createElement("h1",["h1FromInstruction"],"Stwórz swoją własny poziom gry")
    const p=createElement("p",["instrukcja"])
    const pakButton=createElement("div",["pakButton"])
    p.innerHTML=`W <span class="nazwaObrazka">różowym okienku</span> wpisz nazwe(dowolną)
    dla swojego zdjęcia , w okienku <span class="adresDoImg">łososiowy</span> wstaw link do obrazka , <span class="infoJakSkopiowacObraz">
    Wejdz w google , wpisz nazawe interesujacego Cie obrazka , gdy się wyswietli kliknij na niego prawym przyciskiem myszki i wybierz opcje
     <span class="importantText">Kopiuj adres obrazka</span> nastepnie wklej ten adres</span>
     <br/>
     <h4>Lub kliknij na jeden z sugerowanych obrazków</h4>
     <br/>Przyciskiem  <span class="wazne">Dodaj zdjecie </span> dodajesz jedną pare kart do dopasowania , gdy zakonczysz
     dodawać zdj możesz kliknąć <span class="wazne">Dodaj lewel</span>Możesz <span class="wazne"> dodać tyle poziomów ile bedziesz chciał</span><br>
     Gdy chcesz juz zagrać nacisnij przycisk <span class="wazne">Start again</span>
     
     `
    const idImage=createInput("input","text","idImage","Podaj nazwe dla swojego zdjecia")
    const addImage=createInput("textarea","text","addImage","Wstaw link do obrazka")
    const exampleImages=createElement("div",["exampleImagesToAdd"])
    arrayExampleImage.forEach((el,i,arr)=>{
        console.log(el)
        exampleImages.appendChild(el)
    })
    const btnAddImage=createElement("button",["btnAddImage"],"Dodaj zdjecie")
    const btnAddLevel=createElement("button",["btnAddLevel"],"Dodaj Lewel")
    const btnStart=createElement("button",["btnStart"],"Start Again")

    boxToCreateOwnLevel.appendChild(h1)
    boxToCreateOwnLevel.appendChild(p)
    boxToCreateOwnLevel.appendChild(idImage)
    boxToCreateOwnLevel.appendChild(addImage)
    boxToCreateOwnLevel.appendChild(exampleImages)
pakButton.appendChild(btnAddImage)

pakButton.appendChild(btnAddLevel)
  
    pakButton.appendChild(btnStart)
boxToCreateOwnLevel.appendChild(pakButton)
    // boxToCreateOwnLevel.appendChild(wrapper)
    return boxToCreateOwnLevel
}