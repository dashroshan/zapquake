import classes from './spellselector.module.css';
import zapImg from '../../assets/zap.png';
import eqImg from '../../assets/quake.png';

import { Component } from 'react';
import { SpellImg } from '../spellimg/spellimg';

class SpellSelector extends Component {

    state = {
        zap: 1,
        eq: 1,
        cczap: 1,
        cceq: 1,
    }

    zapChanged = (event) => this.setState({ zap: event.target.value });
    eqChanged = (event) => this.setState({ eq: event.target.value });
    ccZapChanged = (event) => this.setState({ cczap: event.target.value });
    ccEqChanged = (event) => this.setState({ cceq: event.target.value });

    render() {
        return (
            <div className={classes.card} >
                <div className={classes.selectWrap}>
                    <span className={classes.spellSection}>
                        <SpellImg type="zap" level={this.state.zap} iscc={false} />
                        <input class={classes.slider + " " + classes.sliderZap} type="range" min="1" max="9" value={this.state.zap} onChange={this.zapChanged} />
                    </span >
                    <span className={classes.spellSection}>
                        <SpellImg type="eq" level={this.state.eq} iscc={false} />
                        <input class={classes.slider + " " + classes.sliderEq} type="range" min="1" max="5" value={this.state.eq} onChange={this.eqChanged} />
                    </span>
                    <span className={classes.spellSection}>
                        <SpellImg type="zap" level={this.state.cczap} iscc={true} />
                        <input class={classes.slider + " " + classes.sliderZap} type="range" min="1" max="9" value={this.state.cczap} onChange={this.ccZapChanged} />
                    </span >
                    <span className={classes.spellSection}>
                        <SpellImg type="eq" level={this.state.cceq} iscc={true} />
                        <input class={classes.slider + " " + classes.sliderEq} type="range" min="1" max="5" value={this.state.cceq} onChange={this.ccEqChanged} />
                    </span>
                </div>
            </div >
        );
    }
}

export { SpellSelector };