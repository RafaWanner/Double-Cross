import defaults from "./components/defaults.js";

const diceRolls = document.querySelector('.dice-rolls');
const result = document.querySelector('.result');
const diceResult = document.querySelector('.dice')

var numDice = document.getElementById('num-dice');
var critRange = document.getElementById('crit-range');
var modfier = document.getElementById('modfier');

function addDicesResults(dicesArray, critRange, round) {
    // Inicia a string com a indicação da rodada
    let resultHtml = '<p>Roll ' + round + ': ';
    
    dicesArray = dicesArray.sort(function (a, b) {return b - a;})
    // Itera sobre o array para construir o HTML, colocando em negrito os valores >= critRange
    dicesArray.forEach(dice => {
        if (dice >= critRange) {
            resultHtml += '<strong>' + dice + '</strong>, ';
        } else {
            resultHtml += dice + ', ';
        }
    });

    // Remove a última vírgula e espaço, e fecha a tag <p>
    resultHtml = resultHtml.slice(0, -2) + '</p>';
    
    // Adiciona o HTML ao elemento de resultado
    diceResult.innerHTML += resultHtml;
}

function resetDicesResults(){
    diceResult.textContent = '';
}

function getDcTest2(dice, crit, mod) {
    (dice.value === '') ? dice.value = 1 : null;
    (crit.value === '') ? crit.value = 10 : null;
    (mod.value === '') ? mod.value = 0 : null;
    
    resetDicesResults()
    let dices = [];
    let sum = 0;
    let i = 0;
    dices = defaults.getRndArray(dice.value);

    while(dices.length > 0){
        i++;
        //console.log({dices});
        let biggestDice = Math.max(...dices);
        if(biggestDice >= crit.value){
            sum += 10;
        } else {
            sum += biggestDice
            addDicesResults([biggestDice], crit.value, i)
            break;
        }
        addDicesResults(dices, crit.value, i);
        dices = dices.filter(element => element >= crit.value);
        dices = defaults.getRndArray(dices.length);
    } 
    
    return sum + Number(mod.value)
    //return defaults.getDcTest(defaults.getRndArray(dice.value), crit.value) + Number(mod.value);
}


(diceRolls === null) ? null : diceRolls.addEventListener('click', function() {
    let test = getDcTest2(numDice, critRange, modfier);
    (result === null) ? null : result.textContent = "Result: " + test;
});

