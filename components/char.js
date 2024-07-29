import data from './char.json' with { type: 'json' };

// "with" only works with newest versions of node
// use assert instead 

//import data from '../char.json' assert { type: 'json' };
// Firefox apparently does not support "assert"

// Adiciona um poder ao objeto `powers`
function addPower(myData, powerName, powerLevel) {
    if (!myData || !myData.powers) {
        console.error('Dados do personagem não encontrados.');
        return;
    }
    
    if (myData.powers[powerName]) {
        console.log(`O poder "${powerName}" já existe.`);
    } else {
        myData.powers[powerName] = powerLevel;
        console.log(`Poder "${powerName}" adicionado com sucesso.`);
    }
}

// Remove um poder do objeto `powers`
function removePower(myData, powerName) {
    if (!myData || !myData.powers) {
        console.error('Dados do personagem não encontrados.');
        return;
    }
    
    if (myData.powers[powerName]) {
        delete myData.powers[powerName];
        console.log(`Poder "${powerName}" removido com sucesso.`);
    } else {
        console.log(`O poder "${powerName}" não está presente.`);
    }
}

function getChar(){return data}

export default {getChar, addPower, removePower};