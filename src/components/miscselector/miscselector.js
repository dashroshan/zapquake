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

    return (
        <div className={classes.card}>
            <div>
                <span><Select className={classes.select} menuPlacement="top" isSearchable={false} placeholder="Select defense/hero" options={generateOptions()} onChange={id => props.defIdChanged(id)} /></span>
                <div className={classes.sliders}><span className={classes.currentCC}>{props.ccSpace}</span><input class={classes.slider} type="range" min="0" max="3" value={props.ccSpace} onChange={(e) => props.ccSpaceChanged(e)} />CC Spell Space</div>
                <div className={classes.sliders}><span className={classes.currentCC}>{props.defLvl}</span><input class={classes.slider} type="range" min="1" max={hp[props.defId]["hp"][0]} value={props.defLvl} onChange={(e) => props.defLvlChanged(e)} />{(props.defId < 4 && props.defId != 0) ? "Hero" : "Defense"} Level</div>
                {(props.defId < 4 && props.defId != 0) ? <div className={classes.sliders}><span className={classes.currentCC}>{props.warden}</span><input class={classes.slider} type="range" min="1" max="55" value={props.warden} onChange={(e) => props.wardenChanged(e)} />Enemy Warden Level</div> : null}
                <img src={buttonImg} className={classes.calcBtn} onClick={props.calculate} />
            </div>
        </div >
    );
}

export { MiscSelector };