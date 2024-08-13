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
};

function setPowerLvl(power, lvl){
    if (lvl < 0 || lvl > power.maxLvl){
        console.log(`IMPOSSIBLE LVL - ${power.name}`);
    } else {
        power.lvl = lvl;
    }
};

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
};

export default {
    getRndInteger, 
    getRndArray, 
    getDcTest, 
    setPowerLvl, 
    stressTest
};