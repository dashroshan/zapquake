import { hp, dmg, aura } from './data';

const adjustWardenAura = (buildingHp, wardenLvl) => {
    if (wardenLvl > 40)
        wardenLvl = 40;
    let hpBoost = buildingHp * aura[wardenLvl][0];
    let hpBoostMax = aura[wardenLvl][1];
    if (hpBoost > hpBoostMax)
        hpBoost = hpBoostMax;
    return hpBoost + buildingHp;
}

const getCombos = (buildingId, buildingLvl, zapLvl, eqLvl, ccSpace, ccZapLvl, ccEqLvl, wardenLvl) => {
    let buildingHp = adjustWardenAura(hp[buildingId]["hp"][buildingLvl], wardenLvl);
    let zapDmg = dmg[1][zapLvl];
    let ccZapDmg = dmg[1][ccZapLvl];
    let eqDmg = dmg[0][eqLvl];
    let ccEqDmg = dmg[0][ccEqLvl];
    let combos = [];
    let isHero = buildingId < 4;

    for (let z = 0; z < 15; z++)
        for (let e = 0; e < 15; e++)
            for (let cz = 0; cz < ccSpace + 1; cz++)
                for (let ce = 0; ce < ccSpace + 1; ce++)
                    if ((z + e + cz + ce <= 14) && ((isHero && e == 0 && ce == 0) || !isHero))
                        combos.push([z + e + cz + ce, z, e, cz, ce, cz + ce]);

    let validCombos = [];
    for (let combo of combos) {
        let dmgByEq = 0;
        for (let ccEq = 1; ccEq < combo[4] + 1; ccEq++)
            dmgByEq += buildingHp * (ccEqDmg / (2 * ccEq - 1)) / 100;
        for (let eq = 1; eq < combo[2] + 1; eq++)
            dmgByEq += buildingHp * (eqDmg / (2 * (combo[4] + eq) - 1)) / 100;
        let dmgByZap = combo[1] * zapDmg + combo[3] * ccZapDmg;
        if (dmgByEq + dmgByZap >= buildingHp)
            validCombos.push(combo);
    }

    validCombos = validCombos.sort((a, b) => {
        if (a[0] == b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });
    let minimumCombos = [];
    for (let combo of validCombos) {
        if (combo[0] == validCombos[0][0])
            minimumCombos.push([combo[1], combo[2], combo[3], combo[4]]);
    }
    minimumCombos = minimumCombos.sort((a, b) => {
        if (a[3] + a[4] == b[3] + b[4]) {
            return 0;
        }
        else {
            return (a[3] + a[4] < b[3] + b[4]) ? 1 : -1;
        }
    });
    let finalCombos = [];
    for (let combo of minimumCombos) {
        if (combo[2] + combo[3] == minimumCombos[0][2] + minimumCombos[0][3])
            finalCombos.push([combo[0], combo[1], combo[2], combo[3]]);
    }
}

export { getCombos };
