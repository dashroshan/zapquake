import classes from './miscselector.module.css';
import { Component } from 'react';
import Select from 'react-select'
import { hp } from '../../calculator/data';
import buttonImg from '../../assets/button.png'

class MiscSelector extends Component {
    state = {
        ccSpace: 0,
        defId: 0,
    };

    generateOptions = () => {
        let options = [];
        for (let i = 1; i <= 17; i++)
            options.push({ value: i, label: hp[i]["name"] });
        return options;
    }

    levelRange = () => {
        if (this.state.defId == 0) return "0";
        let maxLvl = hp[this.state.defId]["hp"][0];
        return "1-" + maxLvl.toString();
    }

    ccSpaceChanged = (event) => this.setState({ ccSpace: event.target.value });

    render() {
        return (
            <div className={classes.card}>
                <div>
                    <span><Select className={classes.select} menuPlacement="top" isSearchable={false} placeholder="Select defense/hero" options={this.generateOptions()} onChange={id => this.setState({ defId: id.value })} /></span>
                    <span>CC Spell Space</span><input class={classes.slider} type="range" min="0" max="3" value={this.state.ccSpace} onChange={this.ccSpaceChanged} /><span>{this.state.ccSpace}</span>
                    <span className={classes.level}>Defense/hero Level <input type="text" placeholder={this.levelRange()} className={classes.defLvl} /></span>
                    {(this.state.defId < 4) ? < span className={classes.warden}>Enemy Warden Level (Optional) <input type="text" placeholder='0' className={classes.wardenLvl} /></span> : null}
                    <img src={buttonImg} className={classes.calcBtn} />
                </div>
            </div >
        );
    }
}

export { MiscSelector };