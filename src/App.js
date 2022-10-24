import "./App.css";
import { Component } from "react";

import { getCombos } from "./calculator/process";
import { Navbar } from "./components/navbar/navbar";
import { Combo } from "./components/combo/combo";
import { Controls } from "./components/controls/controls";

const getSavedData = (data, value) =>
    localStorage.getItem(data) === null
        ? value
        : parseInt(localStorage.getItem(data));

class App extends Component {
    state = {
        zap: getSavedData("zap", 1),
        eq: getSavedData("eq", 1),
        cczap: getSavedData("cczap", 1),
        cceq: getSavedData("cceq", 1),
        ccSpace: getSavedData("ccSpace", 0),
        defId: 0,
        defLvl: 1,
        warden: 1,
        combos: [],
    };

    zapChanged = (event) => {
        let zap = parseInt(event.target.value);
        if (!this.state.defId) {
            this.setState({ zap: zap });
            return;
        }
        let combos = getCombos(
            this.state.defId,
            this.state.defLvl,
            zap,
            this.state.eq,
            this.state.ccSpace,
            this.state.cczap,
            this.state.cceq,
            this.state.warden
        );
        this.setState({ zap: zap, combos: combos });
    };

    eqChanged = (event) => {
        let eq = parseInt(event.target.value);
        if (!this.state.defId) {
            this.setState({ eq: eq });
            return;
        }
        let combos = getCombos(
            this.state.defId,
            this.state.defLvl,
            this.state.zap,
            eq,
            this.state.ccSpace,
            this.state.cczap,
            this.state.cceq,
            this.state.warden
        );
        this.setState({ eq: eq, combos: combos });
    };

    ccZapChanged = (event) => {
        let cczap = parseInt(event.target.value);
        if (!this.state.defId) {
            this.setState({ cczap: cczap });
            return;
        }
        let combos = getCombos(
            this.state.defId,
            this.state.defLvl,
            this.state.zap,
            this.state.eq,
            this.state.ccSpace,
            cczap,
            this.state.cceq,
            this.state.warden
        );
        this.setState({ cczap: cczap, combos: combos });
    };

    ccEqChanged = (event) => {
        let cceq = parseInt(event.target.value);
        if (!this.state.defId) {
            this.setState({ cceq: cceq });
            return;
        }
        let combos = getCombos(
            this.state.defId,
            this.state.defLvl,
            this.state.zap,
            this.state.eq,
            this.state.ccSpace,
            this.state.cczap,
            cceq,
            this.state.warden
        );
        this.setState({ cceq: cceq, combos: combos });
    };

    ccSpaceChanged = (event) => {
        let ccSpace = parseInt(event.target.value);
        if (!this.state.defId) {
            this.setState({ ccSpace: ccSpace });
            return;
        }
        let combos = getCombos(
            this.state.defId,
            this.state.defLvl,
            this.state.zap,
            this.state.eq,
            ccSpace,
            this.state.cczap,
            this.state.cceq,
            this.state.warden
        );
        this.setState({ ccSpace: ccSpace, combos: combos });
    };

    defIdChanged = (event) => {
        let defId = parseInt(event.value);
        let combos = getCombos(
            defId,
            1,
            this.state.zap,
            this.state.eq,
            this.state.ccSpace,
            this.state.cczap,
            this.state.cceq,
            this.state.warden
        );
        this.setState({ defId: defId, defLvl: 1, combos: combos });
    };

    defLvlChanged = (event) => {
        let defLvl = parseInt(event.target.value);
        let combos = getCombos(
            this.state.defId,
            defLvl,
            this.state.zap,
            this.state.eq,
            this.state.ccSpace,
            this.state.cczap,
            this.state.cceq,
            this.state.warden
        );
        this.setState({ defLvl: defLvl, combos: combos });
    };

    wardenChanged = (event) => {
        let warden = parseInt(event.target.value);
        if (!this.state.defId) {
            this.setState({ warden: warden });
            return;
        }
        let combos = getCombos(
            this.state.defId,
            this.state.defLvl,
            this.state.zap,
            this.state.eq,
            this.state.ccSpace,
            this.state.cczap,
            this.state.cceq,
            warden
        );
        this.setState({ warden: warden, combos: combos });
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                <Controls
                    zapChanged={this.zapChanged}
                    eqChanged={this.eqChanged}
                    ccZapChanged={this.ccZapChanged}
                    ccEqChanged={this.ccEqChanged}
                    zap={this.state.zap}
                    eq={this.state.eq}
                    cczap={this.state.cczap}
                    cceq={this.state.cceq}
                    ccSpaceChanged={this.ccSpaceChanged}
                    defIdChanged={this.defIdChanged}
                    defId={this.state.defId}
                    ccSpace={this.state.ccSpace}
                    defLvl={this.state.defLvl}
                    warden={this.state.warden}
                    defLvlChanged={this.defLvlChanged}
                    wardenChanged={this.wardenChanged}
                />
                {this.state.defId ? (
                    <Combo
                        combos={this.state.combos}
                        levels={[
                            this.state.zap,
                            this.state.eq,
                            this.state.cczap,
                            this.state.cceq,
                        ]}
                    />
                ) : null}
            </div>
        );
    }
}

export default App;
