//FIRST LEVEL//
import awokoda from '../img/firstLevel/awokado.jpg'
import jabłko from '../img/firstLevel/jabłko.jpg'
import pomarancza from '../img/firstLevel/pomarancza.jpg'
import truskawka from '../img/firstLevel/truskawka.jpg'
import { createImageObject } from './createImageObject.js'

//SECOND LEVEL//
import dinozaur2 from '../img/secondLevel/dinozaur2.jpg'
import fura from '../img/secondLevel/fura.png'
import mis from '../img/secondLevel/mis.jpg'
import morze from '../img/secondLevel/morze.jpg'
import motyl from '../img/secondLevel/motyl.png'
//Third Level//

import cegla from '../img/thirdLevel/cegla.jpg'
import glodowka from '../img/thirdLevel/glodowka.png'
import keto5 from '../img/thirdLevel/keto5.png'
import ketoGofry from '../img/thirdLevel/ketoGofry.png'
import reklama2 from '../img/thirdLevel/reklama2.png'
import reklama3 from '../img/thirdLevel/reklama3.jpg'





 export let imagesTofirstLevel
 export let imagesToSecondLevel
 export let imagesToThirdLevel


 imagesTofirstLevel=[{img:awokoda,id:"awokado"},{img:jabłko,id:"jabłko"},{img:pomarancza,id:"pomarancza"},{img:truskawka,id:"truskawka"}]
let copyFirstLevel=[...imagesTofirstLevel]
imagesTofirstLevel=imagesTofirstLevel.concat(copyFirstLevel)
imagesTofirstLevel=createImageObject(8,imagesTofirstLevel)


imagesToSecondLevel=[{img:dinozaur2,id:"dinozaur2"},{img:fura,id:"fura"},{img:mis,id:"mis"},{img:morze,id:"morze"},{img:motyl,id:"motyl"}]
let copySecondLevel=[...imagesToSecondLevel]
imagesToSecondLevel=imagesToSecondLevel.concat(copySecondLevel)
imagesToSecondLevel=createImageObject(10,imagesToSecondLevel)


imagesToThirdLevel=[{img:cegla,id:"cegla"},{img:glodowka,id:"glodowka"},{img:keto5,id:"keto5"},{img:ketoGofry,id:"ketoGofry"},{img:reklama2,id:"reklama2"},{img:reklama3,id:"reklama3"}]
let copyThirdLevel=[...imagesToThirdLevel]
imagesToThirdLevel=imagesToThirdLevel.concat(imagesToThirdLevel)
imagesToThirdLevel=createImageObject(12,imagesToThirdLevel)
