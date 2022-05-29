import classes from './spellimg.module.css';
import zapImg from '../../assets/zap.png';
import eqImg from '../../assets/quake.png';

const SpellImg = (props) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.spellImg} src={(props.type == "zap") ? zapImg : eqImg} />
            <div className={(((props.type == "zap" && props.level == 9) || (props.type != "zap" && props.level == 5))) ? classes.lvlBoxMax : classes.lvlBox}>{props.level}</div>
        </div>
    );
}

export { SpellImg };