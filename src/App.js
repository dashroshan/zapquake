import { NavBar } from './components/navbar/navbar'
import { SpellSelector } from './components/spellselector/spellselector';
import { MiscSelector } from './components/miscselector/miscselector';
import { Combo } from './components/combo/combo';
import './App.css';
import { Component } from 'react';

class App extends Component {
    state = {
        zap: 0,
        eq: 0,
        cczap: 0,
        cceq: 0,
    };

    render() {
        return (
            <div className="App">
                <NavBar />
                <SpellSelector />
                <Combo />
                <MiscSelector />
            </div>
        );
    }
}

export default App;
