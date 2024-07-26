import defaults from "./defaults.js";
import Balor from "./balor.js";
import char from "./char.js"

const balor = Balor.getRollback();

const objectContainer = document.getElementById('objectContainer');

function objectToHTML(object) {
    const objectBox = document.createElement('div');
    objectBox.className = 'object-box';
    
    // Verifica a presença de cada atributo e fornece um valor padrão se estiver ausente
    const name = object.name ?? "-";
    const power = object.power ?? "-";
    const maxLvl = object.maxLvl ?? "0";
    const timing = object.timing ?? "-";
    const skill = object.skill ?? "-";
    const difficulty = object.difficulty ?? "-";
    const target = object.target ?? "-";
    const range = object.range ?? "-";
    const encroach = object.encroach ?? "0";
    const restrict = object.restrict ?? "-";
    const lvl = object.lvl ?? "0";
    const affects = object.affects ? object.affects.join(', ') : "-";
    let res;
    try {
        // Tenta executar a função res e obter o resultado
        res = object.res ? `[${object.res().join(', ')}]` : "[0]";
    } catch (error) {
        // Se ocorrer um erro, define res como "-"
        console.error("Erro ao calcular res:", error);
        res = "-";
    }
    const description = object.description ? object.description() : "-";

    objectBox.innerHTML = `
        <h2>${name}</h2>
        <div class="object-details">
            <div class="object-details-grid">
                <p><strong>Max Level:</strong> ${maxLvl}</p>
                <p><strong>Timing:</strong> ${timing}</p>
                <p><strong>Skill:</strong> ${skill}</p>
                <p><strong>Difficulty:</strong> ${difficulty}</p>
                <p><strong>Target:</strong> ${target}</p>
                <p><strong>Range:</strong> ${range}</p>
                <p><strong>Encroach:</strong> ${encroach}</p>
                <p><strong>Restrict:</strong> ${restrict}</p>
                <p><strong>Level:</strong> ${lvl}</p>
                <p><strong>Res:</strong> ${res}</p>
            </div>
            <p class="description"><strong>Description:</strong> ${description}</p>
        </div>
    `;

    return objectBox;
}

function AllPowersToHTML(module) {
    // Cria um fragmento de documento para armazenar os elementos DOM
    const fragment = document.createDocumentFragment();

    Object.entries(module).forEach(([key, func]) => {
        if (typeof func === 'function') {
            console.log(`Adicionando ${key}:`);
            // Cria o elemento DOM usando a função objectToHTML
            const element = objectToHTML(func());
            // Adiciona o elemento ao fragmento
            fragment.appendChild(element);
        }
    });

    return fragment; // Retorna o fragmento de documento
}


//const teste = objectToHTML(balor);

objectContainer.appendChild(AllPowersToHTML(Balor));
    

