import classes from './miscselector.module.css';
import { Component } from 'react';

class MiscSelector extends Component {
    state = {
        ccSpace: 0,
    };

    ccSpaceChanged = (event) => this.setState({ ccSpace: event.target.value });

    render() {
        return (
            <div className={classes.card}>
                <div>
                    <span>CC Spell Space</span><input class={classes.slider} type="range" min="0" max="3" value={this.state.ccSpace} onChange={this.ccSpaceChanged} /><span>{this.state.ccSpace}</span>
                    <span className={classes.warden}>Enemy Warden Level (Optional) <input type="text" placeholder='0' className={classes.wardenLvl} /></span>
                </div>
            </div >
        );
    }
}

export { MiscSelector };