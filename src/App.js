import { NavBar } from './components/navbar/navbar'
import { SpellSelector } from './components/spellselector/spellselector';
import { MiscSelector } from './components/miscselector/miscselector';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SpellSelector />
            <MiscSelector />
        </div>
    );
}

export default App;
