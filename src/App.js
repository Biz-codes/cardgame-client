import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playzone from './Playzone.js'
import Landing from './Landing.js'


function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Battle of the Queens</h1>
          <h2>(a card game)</h2>
        </header>
        <main>
        <Switch>
          <Route exact path = "/" component = {Landing} />
          <Route path = "/play" component = {Playzone} />
        </Switch>        
      
        </main>
      </BrowserRouter>


    </div>
  );
}

export default App;
