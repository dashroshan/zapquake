import { NavBar } from './components/navbar/navbar'
import { SpellSelector } from './components/spellselector/spellselector';
import { MiscSelector } from './components/miscselector/miscselector';
import { Combo } from './components/combo/combo';
import './App.css';
import { Component } from 'react';
import { getCombos } from './calculator/process';

class App extends Component {
    state = {
        zap: 1,
        eq: 2,
        cczap: 3,
        cceq: 4,
        ccSpace: 0,
        defId: 0,
        defLvl: 1,
        warden: 1,
        toShow: 0,
        combos: [],
    };

    zapChanged = (event) => this.setState({ zap: parseInt(event.target.value), toShow: 0 });
    eqChanged = (event) => this.setState({ eq: parseInt(event.target.value), toShow: 0 });
    ccZapChanged = (event) => this.setState({ cczap: parseInt(event.target.value), toShow: 0 });
    ccEqChanged = (event) => this.setState({ cceq: parseInt(event.target.value), toShow: 0 });
    ccSpaceChanged = (event) => this.setState({ ccSpace: parseInt(event.target.value), toShow: 0 });
    defIdChanged = (id) => this.setState({ defId: parseInt(id.value), toShow: 0 });
    defLvlChanged = (event) => this.setState({ defLvl: parseInt(event.target.value), toShow: 0 });
    wardenChanged = (event) => this.setState({ warden: parseInt(event.target.value), toShow: 0 });

    calculate = () => {
        let combos = getCombos(this.state.defId, this.state.defLvl, this.state.zap, this.state.eq, this.state.ccSpace, this.state.cczap, this.state.cceq, this.state.warden);
        this.setState({ toShow: 1, combos: combos })
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <SpellSelector zapChanged={this.zapChanged} eqChanged={this.eqChanged} ccZapChanged={this.ccZapChanged} ccEqChanged={this.ccEqChanged} zap={this.state.zap} eq={this.state.eq} cczap={this.state.cczap} cceq={this.state.cceq} />
                {(this.state.toShow) ? <Combo combos={this.state.combos} levels={[this.state.zap, this.state.eq, this.state.cczap, this.state.cceq]} /> : null}
                <MiscSelector ccSpaceChanged={this.ccSpaceChanged} defIdChanged={this.defIdChanged} defId={this.state.defId} ccSpace={this.state.ccSpace} defLvl={this.state.defLvl} warden={this.state.warden} defLvlChanged={this.defLvlChanged} wardenChanged={this.wardenChanged} calculate={this.calculate} />
            </div>
        );
    }
}

export default App;
