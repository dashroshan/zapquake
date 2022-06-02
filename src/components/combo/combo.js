import classes from './combo.module.css';
import zapImg from '../../assets/zap.png';
import eqImg from '../../assets/quake.png';

const Combo = () => {
    const comboTile = (img, type, total, level, spell) => {
        return (<div className={(total == 0) ? `${classes.wrapper} ${classes.greyOut}` : `${classes.wrapper}`}>
            <img className={classes.spellImg} src={img} />
            <div className={(((spell == "zap" && level == 9) || (type != "zap" && level == 5))) ? classes.lvlBoxMax : classes.lvlBox}>{level}</div>
            <div className={classes.ccOrOwn}>{type} x {total}</div>
        </div>);
    }

    const comboTileWrap = (quantity) => {
        return (<div className={classes.card}>
            {comboTile(zapImg, "own", quantity[0], 4, "zap")}
            {comboTile(eqImg, "own", quantity[1], 5, "eq")}
            {comboTile(zapImg, "cc", quantity[2], 9, "zap")}
            {comboTile(eqImg, "cc", quantity[3], 4, "eq")}
        </div>);
    }
    return (
        <div className={classes.combos}>
            {comboTileWrap([1, 0, 3, 0])}
        </div>
    );
}

export { Combo };