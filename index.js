import defaults from "./defaults.js";
import balor from "./balor.js";

const botao1 = document.querySelector('.botao1');
const high = document.querySelector('.high');
const low = document.querySelector('.low')
const avg = document.querySelector('.avg');

const botao2 = document.querySelector('.botao2');
const armor = document.querySelector('.armor');
const repulsion = document.querySelector('.repulsion');
const gravity = document.querySelector('.gravity');

(botao1 === null) ? null : botao1.addEventListener('click', function() {
    //arr = getRndArray(10)
    //num = getDcTest(arr, 7)
    //document.querySelector('.arr').textContent = arr
    let test = defaults.stressTest(10000, 7, 7);

    (high === null) ? null : high.textContent = "High: " + test[0];
    (low === null) ? null : low.textContent = "Low: " + test[1];
    (avg === null) ? null : avg.textContent = "Avg: " + test[2];
});

(botao2 === null) ? null : botao2.addEventListener('click', function() {
    //(armor === null) ? null : armor.textContent = "Armor: " + 8;
    (repulsion === null) ? null : repulsion.textContent = "Repulsion: " + balor.getRepulsionField().description();
    //(gravity === null) ? null : gravity.textContent = "Gravity: " + balor.getGravityGuard().description();
    //balor.getSpaceCompression();
});