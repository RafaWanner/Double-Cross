import defaults from "./components/defaults.js";

const diceRolls = document.querySelector('.dice-rolls');
const result = document.querySelector('.result');

var numDice = document.getElementById('num-dice');
var critRange = document.getElementById('crit-range');
var modfier = document.getElementById('modfier');

function getDcTest2(dice, crit, mod) {
    (dice.value === '') ? dice.value = 1 : null;
    (crit.value === '') ? crit.value = 10 : null;
    (mod.value === '') ? mod.value = 0 : null;
    return defaults.getDcTest(defaults.getRndArray(dice.value), crit.value) + Number(mod.value);
}

(diceRolls === null) ? null : diceRolls.addEventListener('click', function() {
    let test = getDcTest2(numDice, critRange, modfier);
    (result === null) ? null : result.textContent = "Result: " + test;
});

function displayResults(allResults, repeatCount, modifier) {
    const resultsDiv = document.getElementById('dice');
    (resultsDiv === null) ? null : resultsDiv.innerHTML = '';
    allResults.forEach((round, index) => {
        const roundElement = document.createElement('p');
        roundElement.innerText = `Round ${index + 1}: ${round.join(', ')}`;
        (resultsDiv === null) ? null : resultsDiv.appendChild(roundElement);
    });

    const finalRound = allResults[allResults.length - 1];
    const highestValue = Math.max(...finalRound);
    const finalResult = (repeatCount * 10) + highestValue + parseInt(modifier, 10);

    const repeatCountElement = document.createElement('p');
    repeatCountElement.innerHTML = `<strong>Number of repeats: ${repeatCount}</strong>`;
    (resultsDiv === null) ? null : resultsDiv.appendChild(repeatCountElement);

    const finalResultElement = document.createElement('p');
    finalResultElement.innerHTML = `<strong>Final result: ${finalResult}</strong>`;
    (resultsDiv === null) ? null : resultsDiv.appendChild(finalResultElement);
}