import classes from './miscselector.module.css';
import Select from 'react-select'
import { hp } from '../../calculator/data';
import buttonImg from '../../assets/button.png'

const MiscSelector = (props) => {
    const generateOptions = () => {
        let options = [];
        for (let i = 1; i <= 17; i++)
            options.push({ value: i, label: hp[i]["name"] });
        return options;
    }

    const levelRange = () => {
        if (props.defId == 0) return "0";
        let maxLvl = hp[props.defId]["hp"][0];
        return "1-" + maxLvl.toString();
    }

    const validateDefLvl = (e) => {
        let val = parseInt(e.target.value.replace(/[^0-9]/g, ''));
        if (val >= 1 && val <= hp[props.defId]["hp"][0]) return val;
        else return NaN;
    }

    return (
        <div className={classes.card}>
            <div>
                <span><Select className={classes.select} menuPlacement="top" isSearchable={false} placeholder="Select defense/hero" options={generateOptions()} onChange={id => props.defIdChanged(id)} /></span>
                <span>CC Spell Space</span><input class={classes.slider} type="range" min="0" max="3" value={props.ccSpace} onChange={(e) => props.ccSpaceChanged(e)} /><span className={classes.currentCC}>{props.ccSpace}</span>
                <span className={classes.level}>Defense/hero Level <input type="text" placeholder={levelRange()} className={classes.defLvl} onChange={(e) => { let val = validateDefLvl(e); if (val != NaN) props.defLvlChanged(val); else e.target.value = ""; }} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} /></span>
                {(props.defId < 4) ? < span className={classes.warden}>Enemy Warden Level (Optional) <input type="text" placeholder='0' className={classes.wardenLvl} onChange={(e) => props.wardenChanged(e)} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} /></span> : null}
                <img src={buttonImg} className={classes.calcBtn} onClick={props.calculate} />
            </div>
        </div >
    );
}

export { MiscSelector };