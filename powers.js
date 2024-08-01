import Balor from "./syndromes/balor.js";
import { objectToHTML } from "./components/objectToHTML.js";
import Char from "./components/char.js";

let myData = Char.loadData();
// todo: Criar um botao para adicionar/remover um poder pro char

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

(objectContainer === null) ? null : objectContainer.appendChild(AllPowersToHTML(Balor));