import defaults from "./components/defaults.js";

const diceRolls = document.querySelector('.dice-rolls');
const result = document.querySelector('.result');

var numDice = document.getElementById('num-dice');
var critRange = document.getElementById('crit-range');

function getDcTest2(dice, crit) {
    (dice.value === '') ? dice.value = 1 : null;
    (crit.value === '') ? crit.value = 10 : null;
    return defaults.getDcTest(defaults.getRndArray(dice.value), crit.value);
}

(diceRolls === null) ? null : diceRolls.addEventListener('click', function() {
    let test = getDcTest2(numDice, critRange);
    console.log(test);
    (result === null) ? null : result.textContent = "Result: " + test;
});