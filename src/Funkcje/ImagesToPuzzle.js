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
export let arrayExampleImage

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


///ARRA WITH EXAMPLE IMAGES//
 arrayExampleImage=[
    {img:"https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png",id:"windie"},
    {img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/254px-Sunset_2007-1.jpg",id:"zachod-slonca"},
    {img:"https://bi.im-g.pl/im/03/da/17/z25010179ICR,Kiedy-kupujemy-pomidory--wybierajmy-sztuki-dojrzal.jpg",id:"pomidor"},
    {img:"https://ocdn.eu/pulscms-transforms/1/ZWCk9kpTURBXy84NjgzYTlmMjllOTdiOTc3NzE5OTNlMmE4NzA3YjA3Yy5qcGeTlQMAFc0D6M0CMpMJpjg0OWIxYgaTBc0EsM0CdoGhMAE/morze-baltyckie.jpg",id:"morze"},
    {img:"https://bi.im-g.pl/im/dc/3b/19/z26459868AMP,Niebieski-Ksiezyc---co-oznacza-niebieski-Ksiezyc-.jpg",id:"ksiezyc"},
    {img:"https://ocdn.eu/images/pulscms/NjM7MDA_/0dc7eefa75e3f2692394d39b5d3834ef.jpg",id:"ksiezyc-dwa"},
    {img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Gogophercolor.png/1200px-Gogophercolor.png",id:"logo-google-programming"}

]
arrayExampleImage=arrayExampleImage=createImageObject(arrayExampleImage.length,arrayExampleImage,"exampleImages")