function identation(input) {
    const temp = input.value;
    
    const match = temp.match(/Restrict:\s*(.*?)(?:\n|$)/i);
    const restrictValue = match ? match[1].trim() : '';

    var output = `name: "${temp.slice(0, temp.search('\nMax LV: '))}",
    power: "full",
    maxLvl: ${temp.slice(temp.search('Max LV: ') + 8, temp.search(' Timing: '))},
    timing: "${temp.slice(temp.search('Timing: ') + 8, temp.search('\nSkill: '))}",
    skill: "${temp.slice(temp.search('Skill: ') + 7, temp.search(' DFCLTY: '))}",
    difficulty: "${temp.slice(temp.search('DFCLTY: ') + 8, temp.search('\nTarget: '))}",
    target: "${temp.slice(temp.search('Target: ') + 8, temp.search(' RNG: '))}",
    range: "${temp.slice(temp.search('RNG: ') + 5, temp.search('\nEncroach: '))}",
    encroach: ${temp.slice(temp.search('Encroach: ') + 10, temp.search(' Restrict: '))},
    permEcroach: 0,
    restrict: "${restrictValue}",
    lvl: 0,
    affects: [],
    res(){
        return [0];
    },
    description(){
        return \`${(((temp.slice(temp.search(/\.\n/) + 2)).replace(/\n/g, '')).trimEnd()).replace(/LV/g, '${this.lvl}')}\`
    }`;

    console.log(output);

    return output;
}

const buttonSubmit = document.querySelector('.buttonSubmit');
const inputText = document.getElementById('inputText');
const outputText = document.querySelector('.outputText');

(buttonSubmit === null) ? null : buttonSubmit.addEventListener('click', function() {
    (outputText === null) ? null : outputText.textContent = identation(inputText);
});