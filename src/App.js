import './App.css';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Playzone from './Playzone.js'
import Deck from './Deck.js'

function App() {
  const deck = new Deck()
  deck.shuffle()
  console.log(deck.cards)

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <header className="App-header">
          <h1>Queer Queens</h1>
          <h4>A card game</h4>
        </header>
        <main>
          <div className = "computer-deck deck">26</div>
          <div className = "computer-card-slot card-slot"></div>
          <div className = "message">lkhgf</div>
          <div className = "player-deck deck">26</div>
          <div className = "player-card-slot card-slot"></div>
        </main>

        {/* <Switch>
          <Route exact path = "/" component = {Playzone} />
        </Switch>        
      </BrowserRouter> */}

    </div>
  );
}

export default App;
