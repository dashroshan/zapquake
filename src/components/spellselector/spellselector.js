import classes from './spellselector.module.css';
import zapImg from '../../assets/zap.png';
import eqImg from '../../assets/quake.png';

import { Component } from 'react';
import { SpellImg } from '../spellimg/spellimg';

class SpellSelector extends Component {

    state = {
        zap: 4,
        eq: 4,
    }

    zapChanged = (event) => this.setState({ zap: event.target.value });
    eqChanged = (event) => this.setState({ eq: event.target.value });

    render() {
        return (
            <div className={classes.card} >
                <div className={classes.selectWrap}>
                    <span>
                        <img className={classes.spellImg} src={zapImg} />
                        <p>
                            <input class={classes.slider + " " + classes.sliderZap} type="range" min="1" max="9" value={this.state.zap} onChange={this.zapChanged} />
                        </p>
                        <div className={(this.state.zap == 9) ? classes.lvlBoxMax : classes.lvlBox}>{this.state.zap}</div>
                    </span >
                    <span>
                        <img className={classes.spellImg} src={eqImg} />
                        <p>
                            <input class={classes.slider + " " + classes.sliderEq} type="range" min="1" max="5" value={this.state.eq} onChange={this.eqChanged} />
                        </p>
                        <div className={(this.state.eq == 5) ? classes.lvlBoxMax : classes.lvlBox}>{this.state.eq}</div>
                    </span>
                    <SpellImg type="zap" level="5" />
                </div>
            </div >
        );
    }
}

export { SpellSelector };