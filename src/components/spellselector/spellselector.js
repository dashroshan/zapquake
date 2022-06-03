import classes from './spellselector.module.css';

import { SpellImg } from '../spellimg/spellimg';

const SpellSelector = (props) => {
    return (
        <div className={classes.card} >
            <div className={classes.selectWrap}>
                <span className={classes.spellSection}>
                    <SpellImg type="zap" level={props.zap} iscc={false} />
                    <input className={classes.slider + " " + classes.sliderZap} type="range" min="1" max="9" value={props.zap} onChange={(e) => props.zapChanged(e)} />
                </span >
                <span className={classes.spellSection}>
                    <SpellImg type="eq" level={props.eq} iscc={false} />
                    <input className={classes.slider + " " + classes.sliderEq} type="range" min="1" max="5" value={props.eq} onChange={(e) => props.eqChanged(e)} />
                </span>
                <span className={classes.spellSection}>
                    <SpellImg type="zap" level={props.cczap} iscc={true} />
                    <input className={classes.slider + " " + classes.sliderZap} type="range" min="1" max="9" value={props.cczap} onChange={(e) => props.ccZapChanged(e)} />
                </span >
                <span className={classes.spellSection}>
                    <SpellImg type="eq" level={props.cceq} iscc={true} />
                    <input className={classes.slider + " " + classes.sliderEq} type="range" min="1" max="5" value={props.cceq} onChange={(e) => props.ccEqChanged(e)} />
                </span>
            </div>
        </div >
    );
}

export { SpellSelector };