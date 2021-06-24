import logo from './logo.svg';
import './App.css';
import { Game } from './Components/Game/game'
import { Header } from './Components/Header/header'

function App() {
  return (
    <div className="App">
        <Header />
        <Game />
    </div>
  );
}

export default App;
