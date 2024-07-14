function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function getRndArray(size) {
    var arr = [];

    for (let i = 0; i < size; i++)
        arr.push(getRndInteger(1,10));

    return arr;
};

function getDcTest(arr, critRange){
    var arrCopy = arr.slice(0)
    arrCopy = arrCopy.sort(function (a, b) {return b - a;});
    let crit = arr.length;
    let res = 0;
    let cont = 1;
    
    while (crit > 0){
        crit = 0;
        
        for (let i = 0; i < arrCopy.length; i++) {
            if (arrCopy[i] >= critRange) {
                crit += 1;
            } else {
                break;
            }
        }
        console.log("Rolagem (" + cont + "):\n" + arrCopy); // Rolagens
        
        if (crit > 0) {
            res += 10;
            arrCopy.length = 0;
            arrCopy = getRndArray(crit);
            cont += 1;
        }

        arrCopy = arrCopy.sort(function (a, b) {return b - a;});
    }

    res += arrCopy[0];

    return res;
}

function stressTest(num, diceNum, critRange){
    let res = 0;
    let avg = 0;
    let high = 0;
    let low = 100000;

    for (let i = 0; i < num; i++){
        res = getDcTest(getRndArray(diceNum), critRange);
        avg += res;

        if(high < res)
            high = res;

        if(low > res)
            low = res;
    }

    const result = [high, low, avg/num];

    return result;
}

function getRepulsionTest(lvl){

    if (lvl < 1 || lvl > 5){
        console.log("ERROR - IMPOSSIBLE LVL - REPULSION FIELD");
        return;
    }

    const arr = getRndArray(1);
    console.log("Repulsion Field (LvL: " + lvl + "):\n" + arr); // D10s
    return arr[0] + (lvl * 2);
}

function getGravityTest(lvl){

    if (lvl < 1 || lvl > 3){
        console.log("ERROR - IMPOSSIBLE LVL - GRAVITY GUARD");
        return;
    }

    const arr = getRndArray(lvl);
    console.log("Gravity Guard (LvL: " + lvl + "):\n" + arr); // D10s
    return arr.reduce((a, b) => a + b, 0);
}

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
    let test = stressTest(10000, 7, 7);

    (high === null) ? null : high.textContent = "High: " + test[0];
    (low === null) ? null : low.textContent = "Low: " + test[1];
    (avg === null) ? null : avg.textContent = "Avg: " + test[2];
});

(botao2 === null) ? null : botao2.addEventListener('click', function() {
    (armor === null) ? null : armor.textContent = "Armor: " + 8;
    (repulsion === null) ? null : repulsion.textContent = "Repulsion: " + getRepulsionTest(5);
    (gravity === null) ? null : gravity.textContent = "Gravity: " + getGravityTest(3);
});