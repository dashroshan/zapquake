import { hp, dmg, aura } from "./data";

let allPossibleCombos = [];
for (let z = 0; z < 15; z++)
  for (let e = 0; e < 15; e++)
    for (let cz = 0; cz <= 3; cz++)
      for (let ce = 0; ce <= 3; ce++)
        if (z + e + cz + ce <= 14 && cz + ce <= 3)
          allPossibleCombos.push([z + e + cz + ce, z, e, cz, ce, cz + ce]);

const adjustWardenAura = (buildingHp, wardenLvl, buildingId) => {
  if (buildingId > 3) return buildingHp;
  if (wardenLvl > 40) wardenLvl = 40;
  let hpBoost = buildingHp * aura[wardenLvl][0];
  let hpBoostMax = aura[wardenLvl][1];
  if (hpBoost > hpBoostMax) hpBoost = hpBoostMax;
  return hpBoost + buildingHp;
};

const getCombos = (
  buildingId,
  buildingLvl,
  zapLvl,
  eqLvl,
  ccSpace,
  ccZapLvl,
  ccEqLvl,
  wardenLvl
) => {
  localStorage.setItem("zap", zapLvl);
  localStorage.setItem("eq", eqLvl);
  localStorage.setItem("cczap", ccZapLvl);
  localStorage.setItem("cceq", ccEqLvl);
  localStorage.setItem("ccSpace", ccSpace);

  let buildingHp = adjustWardenAura(
    hp[buildingId]["hp"][buildingLvl],
    wardenLvl,
    buildingId
  );
  let zapDmg = dmg[1][zapLvl];
  let ccZapDmg = dmg[1][ccZapLvl];
  let eqDmg = dmg[0][eqLvl];
  let ccEqDmg = dmg[0][ccEqLvl];
  let isHero = buildingId < 4;

  let validCombos = [];
  for (let combo of allPossibleCombos) {
    if (
      !(
        ((isHero && combo[2] === 0 && combo[4] === 0) || !isHero) &&
        combo[5] <= ccSpace
      )
    )
      continue;
    let dmgByEq = 0;
    for (let ccEq = 1; ccEq < combo[4] + 1; ccEq++)
      dmgByEq += (buildingHp * (ccEqDmg / (2 * ccEq - 1))) / 100;
    for (let eq = 1; eq < combo[2] + 1; eq++)
      dmgByEq += (buildingHp * (eqDmg / (2 * (combo[4] + eq) - 1))) / 100;
    let dmgByZap = combo[1] * zapDmg + combo[3] * ccZapDmg;
    if (dmgByEq + dmgByZap >= buildingHp)
      validCombos.push([combo[1], combo[2], combo[3], combo[4], combo[0]]);
  }

  validCombos = validCombos.sort((a, b) => {
    if (a[4] === b[4] && a[2] + a[3] === b[2] + b[3]) return 0;
    else if (a[4] === b[4] && a[2] + a[3] < b[2] + b[3]) return -1;
    else if (a[4] === b[4] && a[2] + a[3] > b[2] + b[3]) return 1;
    else return a[4] < b[4] ? -1 : 1;
  });

  let minimumCombos = [];
  for (let combo of validCombos) {
    if (
      combo[4] === validCombos[0][4] &&
      combo[2] + combo[3] === validCombos[0][2] + validCombos[0][3]
    )
      minimumCombos.push([combo[0], combo[1], combo[2], combo[3]]);
  }
  return minimumCombos;
};

export { getCombos };
