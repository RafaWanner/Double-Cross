import Char from "./components/char.js";

let myChar = Char.loadData();

const objectContainer = document.getElementById('objectContainer');

const charDiv = document.createElement('div');
charDiv.className = 'char-info';

// Converte o objeto de poderes em uma lista HTML
const powersList = Object.entries(myChar.powers).map(([powerName, powerLevel]) => `
    <li>${powerName.replace(/([A-Z])/g, ' $1')}: ${powerLevel}</li>
`).join('');

// Adiciona informações ao elemento
charDiv.innerHTML = `
    <h2>Personagem</h2>
    <p><strong>Nome:</strong> ${myChar.name}</p>
    <p><strong>Idade:</strong> ${myChar.age}</p>
    <h3>Poderes:</h3>
    <ul>
        ${powersList}
    </ul>
`;

// Adiciona o elemento ao contêiner
objectContainer.appendChild(charDiv);
