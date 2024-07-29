import Balor from "./syndromes/balor.js";
import { objectToHTML } from "./components/objectToHTML.js";
import Char from "./components/char.js";

const objectContainer = document.getElementById('objectContainer');

function AllPowersToHTML(module) {
    // Cria um frgmento de documento para armazenar os elementos DOM
    const fragment = document.createDocumentFragment();
    
    Object.entries(module).forEach(([key, func]) => {
        if (typeof func === 'function') {
            //console.log(`Adicionando ${key}:`);
            // Cria o elemento DOM usando a função objectToHTML
            const element = objectToHTML(func());
            // Adiciona o elemento ao fragmento
            fragment.appendChild(element);
        }
    });

    return fragment; // Retorna o fragmento de documento

}

let myData = Char.getChar()

console.log(myData)
Char.addPower(myData, Balor.getBlackHammer().name, 1);

console.log(myData)

objectContainer.appendChild(AllPowersToHTML(Balor));


