import defaults from "./defaults.js";

function getRepulsionTest(lvl){

    if (lvl < 1 || lvl > 5){
        console.log("ERROR - IMPOSSIBLE LVL - REPULSION FIELD");
        return;
    }

    const arr = defaults.getRndArray(1);
    console.log("Repulsion Field (LvL: " + lvl + "):\n" + arr); // D10s
    return arr[0] + (lvl * 2);
};

function getGravityTest(lvl){

    if (lvl < 1 || lvl > 3){
        console.log("ERROR - IMPOSSIBLE LVL - GRAVITY GUARD");
        return;
    }

    const arr = defaults.getRndArray(lvl);
    console.log("Gravity Guard (LvL: " + lvl + "):\n" + arr); // D10s
    return arr.reduce((a, b) => a + b, 0);
};

export default {getRepulsionTest, getGravityTest};