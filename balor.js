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
    affects : ["Move.Multi"],
    res(){
        return [2]
    },
    description(){
        return `The Target may perform a Move. How and where he Moves is up to him. This Power can only be used on characters that agree to be targeted. This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getSpaceCompression() {
    return spaceCompression;
};

const repulsionJump = {
    name: "Repulsion Jump",
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
    affects : ["Move"],
    res(){
        return [this.lvl * 5]
    },
    description(){
        return `The User temporarily gains Flight and performs a Move. For this Move, the User may travel an extra [${this.lvl} X 5] meters.`
    }
};

function getRepulsionJump() {
    return repulsionJump;
};

const redshiftWorld = {
    name: "Redshift World",
    power: "full",
    maxLvl: 5,
    timing: "Setup",
    skill: "-",
    difficulty: "Auto",
    target: "Single",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Initiative"],
    res(){
        return [this.lvl * 2]
    },
    description(){
        return `For the duration of the Round, the Target receives a + [${this.lvl} X 2] [Initiative] bonus.`
    }
};

function getRedshiftWorld() {
    return redshiftWorld;
};

const blackHammer = {
    name: "Black Hammer",
    power: "full",
    maxLvl: 5,
    timing: "Major",
    skill: "<RC>",
    difficulty: "Opossed",
    target: "-",
    range: "View",
    encroach: 1,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power"],
    res(){
        return [(this.lvl * 2) + 2]
    },
    description(){
        return `Perform an {Atk. Power: ([${this.lvl} x 2] + 2)} ranged attack. This attack cannot target characters that are in the User's Engagement.`
    }
};

function getBlackHammer() {
    return blackHammer;
};

const fistOfDarkness = {
    name: "Fist of Darkness",
    power: "full",
    maxLvl: 10,
    timing: "Major",
    skill: "<Melee>",
    difficulty: "Opossed",
    target: "Single",
    range: "Weapon",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power"],
    res(){
        return [this.lvl]
    },
    description(){
        return `Perform a melee attack with Fists. Attacks that use this Power receive a + (${this.lvl})Atk. Power bonus and ignores the Target's [Armor] stat during damage calculation.`
    }
};

function getFistOfDarkness() {
    return fistOfDarkness;
};

const quickBlade = {
    name: "Quick Blade",
    power: "full",
    maxLvl: 3,
    timing: "Major",
    skill: "<Melee><Ranged>",
    difficulty: "Opossed",
    target: "-",
    range: "Weapon",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Accuracy.Dice"],
    res(){
        return [this.lvl + 1]
    },
    description(){
        return `Checks that use this Power receive a + [${this.lvl} + 1] dice bonus.`
    }
};

function getQuickBlade() {
    return quickBlade;
};

const giantsAxe = {
    name: "Giant's Axe",
    power: "full",
    maxLvl: 3,
    timing: "Major",
    skill: "<Melee><Ranged>",
    difficulty: "Opossed",
    target: "-",
    range: "Weapon",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power", "Accuracy.Dice"],
    res(){
        return [this.lvl + 1, -2]
    },
    description(){
        return `Checks that use this Power receive a + [${this.lvl} + 1] dice bonus.`
    }
};

function getGiantsAxe() {
    return giantsAxe;
};

const tyrantsLaw = {
    name: "Tyrant's Law",
    power: "full",
    maxLvl: 5,
    timing: "Major",
    skill: "Syndrome",
    difficulty: "Opossed",
    target: "-",
    range: "-",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power"],
    res(){
        return [this.lvl * 2]
    },
    description(){
        return `Attacks that uses this Power receive a + [${this.lvl} X 2] Atk. Power bonus.`
    }
};

function getTyrantsLaw() {
    return tyrantsLaw;
};

const darkMatter = {
    name: "Dark Matter",
    power: "full",
    maxLvl: 3,
    timing: "Minor",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Accuracy.Dice"],
    res(){
        return [this.lvl]
    },
    description(){
        return `For the duration of the current Main Process, any of the User's checks that use a Balor Power receive a + (${this.lvl}) dice bonus.`
    }
};

function getDarkMatter() {
    return darkMatter;
};

const littleEvilEyes= {
    name: "Little Evil Eyes",
    power: "full",
    maxLvl: 5,
    timing: "Setup",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power"],
    res(){
        return [this.lvl * 2]
    },
    description(){
        return `For the duration of the Round, any of the User's attacks that use a Belor Power receive a + [${this.lvl} X 2] damage bonus.`
    }
};

function getLittleEvilEyes() {
    return littleEvilEyes;
};

const marksman = {
    name: "Marksman",
    power: "full",
    maxLvl: 3,
    timing: "Major",
    skill: "<Ranged>",
    difficulty: "Opossed",
    target: "Single",
    range: "View",
    encroach: 4,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power", "Accuracy"],
    res(weapon1, weapon2){
        if (weapon1.type != "Melee" || weapon2.type != "Melee"){
            console.log("NOT MELEE WEAPONS");
            return [0, 0];
        } else {
            return [weapon2.atkPower, weapon2.accuracy];
        }
    },
    description(){
        return `The User selects any two [Type: Melee] weapons other then Fists that he owns. Perform a ranged attack with the selected weapons. Add togetherthe two weapons'Atk. Power and Accuracy for this attack. Both weapons will be destroyed at the end of the User's Main Process, regardless of whether or not the attack succeeded. This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getMarksman() {
    return marksman;
};

const distortedRetribution = {
    name: "Distorted Retribution",
    power: "full",
    maxLvl: 3,
    timing: "Major",
    skill: "Syndrome",
    difficulty: "-",
    target: "Area(Select)",
    range: "-",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Area"],
    res(){
        return ["Area(Select)"]
    },
    description(){
        return `Attacks that use this Power are modified to [Target:Area(Select), but will not be able to target character's in the User's Engagement.This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getDistortedRetribution() {
    return distortedRetribution;
};

const voidPitfall = {
    name: "Void Pitfall",
    power: "full",
    maxLvl: 3,
    timing: "Major",
    skill: "<RC>",
    difficulty: "Opossed",
    target: "Single",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Move.Enemy"],
    res(){
        return ["Engagement"]
    },
    description(){
        return `Perform a ranged attack. If the attack hits its target, the Target is moved to the User's Engagement. This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getVoidPitfall() {
    return voidPitfall;
};

const repulsionHammer = {
    name: "Repulsion Hammer",
    power: "full",
    maxLvl: 5,
    timing: "Major",
    skill: "Syndrome",
    difficulty: "Opossed",
    target: "Single",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Move.Enemy"],
    res(){
        return [this.lvl * 2]
    },
    description(){
        return `If an attack that uses this Power deals at least one point of damage, the Target must Move [${this.lvl}x 2] meters. A BreakAway may be preformed with this Move. The User decides how and where the Target Moves.`
    }
};

function getRepulsionHammer() {
    return repulsionHammer;
};

const eventHorizon = {
    name: "Event Horizon",
    power: "full",
    maxLvl: 3,
    timing: "Setup",
    skill: "-",
    difficulty: "Auto",
    target: "Area",
    range: "Close",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Reaction.Dice.Enemy"],
    res(){
        return [-(this.lvl * 2)]
    },
    description(){
        return `For the duration of the Round, the Reaction checks of all Targets other then the User receive a - [${this.lvl} x 2] dice penalty.`
    }
};

function getEventHorizon() {
    return eventHorizon;
};

const gravitySwamp = {
    name: "Gravity Swamp",
    power: "full",
    maxLvl: 3,
    timing: "Minor",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Reaction.Crit.Enemy"],
    res(){
        return [1]
    },
    description(){
        return `For the duration of the Round, Reaction checks against the User's MajorActions will receive a +i Critical Value penalty. Only characters that are in the User's Engagement are subject to this penalty. This Power maybe used (${this.lvl}) times per Scenario.`
    }
};

function getGravitySwamp() {
    return gravitySwamp;
};

const stillGarden = {
    name: "Still Garden",
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
    affects : ["Initiative.Enemy"],
    res(){
        return [-(this.lvl * 3)]
    },
    description(){
        return `For the duration of the Round, the Target receives a - [${this.lvl} x 3] [Initiative] penalty.`
    }
};

function getStillGarden() {
    return stillGarden;
};

const evilEyeOfSolitude = {
    name: "Evil Eye of Solitude",
    power: "full",
    maxLvl: 3,
    timing: "Auto",
    skill: "-",
    difficulty: "Auto",
    target: "Refer",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Area.Enemy"],
    res(){
        return ["Self"]
    },
    description(){
        return `Declare right before the check of an [Target:Aree] or [Target:Area(Select)] attack is performed. The User must be one of the attack's targets. The attack will now only target the User. Note that for this attack, another character cannot Cover for the User. This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getEvilEyeOfSolitude() {
    return evilEyeOfSolitude;
};

const underworldCage = {
    name: "Underworld Cage",
    power: "full",
    maxLvl: 5,
    timing: "Auto",
    skill: "<RC>",
    difficulty: "Opossed",
    target: "Single",
    range: "View",
    encroach: 5,
    restrict: "-",
    lvl: 0,
    affects : ["Accuracy.Dice", "Move.Multi.Enemy"],
    res(){
        return [this.lvl, 0]
    },
    description(){
        return `Declare when the Target performs a Move or Dash. Perform a ranged attack against the Target. If the attack hits, theTarget's movement automatically fails. The User receives a + (${this.lvl}) dice bonus for this attack. Other characters cannot Cover for the Target. This Power may only be used once per Scene.`
    }
};

function getUnderworldCage() {
    return underworldCage;
};

const invisibleHand = {
    name: "Invisible Hand",
    power: "full",
    maxLvl: 10,
    timing: "Major",
    skill: "<RC>",
    difficulty: "Opossed",
    target: "Area(Select)",
    range: "View",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power", "Accuracy.Dice"],
    res(){
        return [this.lvl, -3]
    },
    description(){
        return `Perform a [Atk. Power: + (${this.lvl})] ranged attack. If the attack deals at least one point of damage, the Target loses Flight. This attack will receive a —3 dice penalty. This Power may only be used once per Round.`
    }
};

function getInvisibleHand() {
    return invisibleHand;
};

const reapersEyes = {
    name: "Reaper's Eyes",
    power: "full",
    maxLvl: 5,
    timing: "Major",
    skill: "<RC>",
    difficulty: "Opossed",
    target: "Single",
    range: "View",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["Atk.Power.Dice", "Atk.Power.Multi"],
    res(){
        return [this.lvl + 1, 0]
    },
    description(){
        return `Perform a ranged attack. If the attack hits its target, the next attack the Target receives will gain a + [${this.lvl} + 1]D damage bonus. Attacks that use this Power cannot deal damage. This Power's effect lasts until the end of the Scene or until the bonus is applied.`
    }
};

function getReapersEyes() {
    return reapersEyes;
};

const staticSpace = {
    name: "Static Space",
    power: "full",
    maxLvl: 3,
    timing: "Major",
    skill: "Syndrome",
    difficulty: "Opossed",
    target: "Single",
    range: "View",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Initiative.Enemy.Multi", "Atk.Power.Multi"],
    res(){
        return [0, 0]
    },
    description(){
        return `If an attack that uses this Power hits its target, for the duration of the Scene the Target's [Initiative] is reduced to zero. The Target may remove this penalty by using a MinorAction. Attacks that use this Power cannot deal damage. This Power may be used (${this.lvl}) times per Scenario.`
    }
};

function getStaticSpace() {
    return staticSpace;
};

const tyrantsArm = {
    name: "Tyrant's Arm",
    power: "full",
    maxLvl: 1,
    timing: "Major",
    skill: "Syndrome",
    difficulty: "Opossed",
    target: "-",
    range: "-",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Bad.Status.Enemy"],
    res(){
        return ["Rigor"]
    },
    description(){
        return `If an attack that uses this Power hits its target, the Target receives the Bad Status Rigor.`
    }
};

function getTyrantsArm() {
    return tyrantsArm;
};

const rollback = {
    name: "Rollback",
    power: "full",
    maxLvl: 5,
    timing: "Auto",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Bad.Status.Remove"],
    res(){
        return [this.lvl]
    },
    description(){
        return `Declare right after receiving a Bad Status. The User may remove up to (LV) number of any Bad Statuses other then Berserk. User chooses which Bad Statuses are removed. This Power may be used even when afflicted with Pressure and may only be used once per Round.`
    }
};

function getRollback() {
    return rollback;
};

const repulsionField = {
    name: "Repulsion Field",
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
    affects : ["HP.Negation"],
    res(){
        const arr = defaults.getRndArray(1);
        console.log("Repulsion Field (LvL: " + this.lvl + "):\n" + arr); // D10s
        return [arr[0] + (this.lvl * 2)]
    },
    description(){
        return `Declare right before HP damage is applied to the Target. The Target's (expected) HP damage is reduced by - [1D + [${this.lvl}  x 2] points. This Power may only be used once per Round.`
    }
};

function getRepulsionField(){
    return repulsionField;
};

const rampartOfTheVoid = {
    name: "Rampart of the Void",
    power: "full",
    maxLvl: 3,
    timing: "Setup",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 2,
    restrict: "-",
    lvl: 0,
    affects : ["Guard"],
    res(){
        return [this.lvl * 3]
    },
    description(){
        return `Forthe duration of the Round, the User receives a + [${this.lvl} x 3] [Guard] stat bonus.`
    }
};

function getRampartOfTheVoid(){
    return rampartOfTheVoid;
};

const gravityGuard = {
    name: "Gravity Guard",
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
    affects : ["Guard"],
    res(){
        const arr = defaults.getRndArray(this.lvl);
        console.log("Gravity Guard (LvL: " + this.lvl + "):\n" + arr); // D10s
        return [arr.reduce((a, b) => a + b, 0)]
    },
    description(){
        return `Declare when Guarding. For the duration of the Guard, the User receives a + (${this.lvl}) D [Guard] stat bonus.`
    }
};

function getGravityGuard(){
    return gravityGuard;
};

const fiendsShield = {
    name: "Fiend's Shield",
    power: "full",
    maxLvl: 3,
    timing: "Auto",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 4,
    restrict: "-",
    lvl: 0,
    affects : ["Guard"],
    res(){
        return [this.lvl * 10]
    },
    description(){
        return `Declare when Guarding. For the duration of the Guard, the User receives a + [${this.lvl} x 10] [Guard] stat bonus. This Power may only be used once per Scene.`
    }
};

function getFiendsShield(){
    return fiendsShield;
};

const darkSpiral = {
    name: "Dark Spiral",
    power: "full",
    maxLvl: 5,
    timing: "Auto",
    skill: "-",
    difficulty: "Auto",
    target: "Self",
    range: "Close",
    encroach: 3,
    restrict: "-",
    lvl: 0,
    affects : ["HP.Damage"],
    res(){
        return [this.lvl * 5]
    },
    description(){
        return `Declare when Guarding against melee attacks. The attacking character receives [${this.lvl} x 5] HP damage.This Power may only be used once per Round.`
    }
};

function getDarkSpiral(){
    return darkSpiral;
};

export default {
    getSpaceCompression,
    getRepulsionJump,
    getRedshiftWorld,
    getBlackHammer,
    getFistOfDarkness,
    getQuickBlade,
    getGiantsAxe,
    getTyrantsLaw,
    getDarkMatter,
    getLittleEvilEyes,
    getMarksman,
    getDistortedRetribution,
    getVoidPitfall,
    getRepulsionHammer,
    getEventHorizon,
    getGravitySwamp,
    getStillGarden,
    getEvilEyeOfSolitude,
    getUnderworldCage,
    getInvisibleHand,
    getReapersEyes,
    getStaticSpace,
    getTyrantsArm,
    getRollback,
    getRepulsionField,
    getRampartOfTheVoid,
    getGravityGuard,
    getFiendsShield,
    getDarkSpiral
};