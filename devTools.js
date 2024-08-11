function identation(input) {
    const temp = input.value;
    
    const match = temp.match(/Restrict:\s*(.*?)(?:\n|$)/i);
    const restrictValue = match ? match[1].trim() : '';
    const name = ((temp.slice(0, temp.search('\nMax LV: '))).replace(/\s+/g, ''))

    var output = `const ${name.charAt(0).toLowerCase() + name.slice(1)} = {
    name: "${temp.slice(0, temp.search('\nMax LV'))}",
    power: "full",
    maxLvl: ${temp.slice(temp.search('Max LV') + 8, temp.search(' Timing'))},
    timing: "${temp.slice(temp.search('Timing') + 8, temp.search('\nSkill'))}",
    skill: "${temp.slice(temp.search('Skill') + 7, temp.search(' DFCLTY'))}",
    difficulty: "${temp.slice(temp.search('DFCLTY') + 8, temp.search('\nTarget'))}",
    target: "${temp.slice(temp.search('Target') + 8, temp.search(' RNG'))}",
    range: "${temp.slice(temp.search('RNG') + 5, temp.search('\nEncroach'))}",
    encroach: ${temp.slice(temp.search('Encroach') + 10, temp.search(' Restrict'))},
    permEcroach: 0,
    restrict: "${restrictValue}",
    lvl: 0,
    affects: [],
    res(){
        return [0];
    },
    description(){
        return \`${(((temp.slice(temp.search(/\.\n/) + 2)).replace(/\n/g, '')).trimEnd()).replace(/LV/g, '${this.lvl}')}\`
    }
};

function get${name}() {
    return ${name.charAt(0).toLowerCase() + name.slice(1)};
};`;

    console.log(output);

    return output;
}

const buttonSubmit = document.querySelector('.button-submit');
const inputText = document.getElementById('input-text');
const outputText = document.querySelector('.output-text');

(buttonSubmit === null) ? null : buttonSubmit.addEventListener('click', function() {
    (outputText === null) ? null : outputText.textContent = identation(inputText);
});

import defaults from "./components/defaults.js";

const stressTest = document.querySelector('.stress-test');
const high = document.querySelector('.high');
const low = document.querySelector('.low')
const avg = document.querySelector('.avg');

var numTries = document.getElementById('num-tries');
var numDice = document.getElementById('num-dice');
var critRange = document.getElementById('crit-range');

function stressTest2(tries, dice, crit) {
    (tries.value === '') ? tries.value = 10000 : null;
    (dice.value === '') ? dice.value = 1 : null;
    (crit.value === '') ? crit.value = 10 : null;
    return defaults.stressTest(tries.value, dice.value, crit.value);
}

(stressTest === null) ? null : stressTest.addEventListener('click', function() {
    let test = stressTest2(numTries, numDice, critRange);

    (high === null) ? null : high.textContent = "High: " + test[0];
    (low === null) ? null : low.textContent = "Low: " + test[1];
    (avg === null) ? null : avg.textContent = "Avg: " + test[2];
});