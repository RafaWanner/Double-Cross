//import data from './char.json' with { type: 'json' };

// "with" only works with newest versions of node
// use assert instead 

//import data from '../char.json' assert { type: 'json' };
// Firefox apparently does not support "assert"

// Adiciona um poder ao objeto `powers`

//function getChar(){return data}

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

function saveData(data) {
    
    // Convertemos o objeto em uma string JSON
    const dataString = JSON.stringify(data);

    // Salvamos a string JSON no localStorage
    localStorage.setItem('userData', dataString);
}

function loadData() {
    // Pegamos a string JSON do localStorage
    const dataString = localStorage.getItem('userData');
   
    if (dataString) {
        // Convertendo a string JSON de volta para um objeto
        const data = JSON.parse(dataString);
        return data;
    } else {
        // Se não houver dados no localStorage
        console.log('Nenhum dado encontrado, Criando um novo...');
        const newChar = {
            "name": "Me",
            "age": 99,
            "powers": {
                
            }
        };
        return newChar;
    }
}

export default {addPower, removePower, saveData, loadData};