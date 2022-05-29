import { NavBar } from './components/navbar/navbar'
import { SpellSelector } from './components/spellselector/spellselector';
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SpellSelector />
        </div>
    );
}

export default App;
