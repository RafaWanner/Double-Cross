import defaults from "./defaults.js";

const spaceCompression = {
    name: "Space Compression",
    power: "full",
    maxLvl: 3,
    timing: "Setup",
    skill: "-",
    difficulty: "Auto",
    target: "Single",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    description(){
        return `The Target may perform a Move. How and where he Moves is up to him. This Power can only be used on characters that agree to be targeted. This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getSpaceCompression() {
    return spaceCompression;
};

const repulsionJump = {
    power: "full",
    maxLvl: 5,
    timing: "Minor",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 1,
    restrict: "-",
    lvl: 0,
    res(){
        return this.lvl * 5
    },
    description(){
        return `The User temporarily gains Flight and performs a Move. For this Move, the User may travel an extra [${this.lvl} X 5] meters.`
    }
};

function getRepulsionJump() {
    return repulsionJump;
};

const repulsionField = {
    power: "full",
    maxLvl: 5,
    timing: "Auto",
    skill: "-",
    difficulty: "Auto",
    target: "Single",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    res(){
        const arr = defaults.getRndArray(1);
        console.log("Space Compression (LvL: " + this.lvl + "):\n" + arr); // D10s
        return arr[0] + (this.lvl * 2)
    },
    description(){
        return `Declare right before HP damage is applied to the Target. The Target's (expected) HP damage is reduced by - [1D + [${this.lvl}  x 2] points. This Power may only be used once per Round.`
    }
};

function getRepulsionField(){
    return repulsionField;
};

const gravityGuard = {
    power: "full",
    maxLvl: 3,
    timing: "Auto",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    res(){
        const arr = defaults.getRndArray(1);
        console.log("Space Compression (LvL: " + this.lvl + "):\n" + arr); // D10s
        return arr[0] + (this.lvl * 2)
    },
    description(){
        return `Declare when Guarding. For the duration of the Guard, the User receives a + (${this.lvl}) D [Guard] stat bonus.`
    }
};

function getGravityGuard(lvl){
    return gravityGuard;
};

export default {
    getSpaceCompression,
    getRepulsionJump,
    getRepulsionField, 
    getGravityGuard
};