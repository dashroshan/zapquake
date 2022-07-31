import classes from "./combo.module.css";
import zapImg from "../../assets/zap.png";
import eqImg from "../../assets/quake.png";

const Combo = (props) => {
    const comboTile = (img, type, total, level, spell) => {
        return (
            <div
                className={
                    total === 0
                        ? `${classes.wrapper} ${classes.greyOut}`
                        : `${classes.wrapper}`
                }
            >
                <img
                    className={classes.spellImg}
                    src={img}
                    alt="ZapQuake Combo Spell"
                />
                <div
                    className={
                        (spell === "zap" && level === 9) || (spell === "eq" && level === 5)
                            ? classes.lvlBoxMax
                            : classes.lvlBox
                    }
                >
                    {level}
                </div>
                <div className={classes.ccOrOwn}>
                    {type} x {total}
                </div>
            </div>
        );
    };

    const comboTileWrap = (quantity) => {
        return (
            <div className={classes.card}>
                {comboTile(zapImg, "own", quantity[0], props.levels[0], "zap")}
                {comboTile(eqImg, "own", quantity[1], props.levels[1], "eq")}
                {comboTile(zapImg, "cc", quantity[2], props.levels[2], "zap")}
                {comboTile(eqImg, "cc", quantity[3], props.levels[3], "eq")}
            </div>
        );
    };

    const allCombos = () => {
        let combos = [];
        for (let combo of props.combos) combos.push(comboTileWrap(combo));
        return combos;
    };

    return (
        <div>
            {props.combos.length === 0 ? null : (
                <div className={classes.totalSpc}>
                    Total spell space: {props.combos[0].reduce((pv, cv) => pv + cv, 0)}
                </div>
            )}
            <div className={classes.combos}>
                {props.combos.length === 0 ? (
                    <div className={classes.card}>
                        <div className={classes.noCombo}>No valid combos found!</div>
                    </div>
                ) : (
                    allCombos()
                )}
            </div>
        </div>
    );
};

export { Combo };
