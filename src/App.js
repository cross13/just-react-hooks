import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import BeerFactory from './examples/beer-factory';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-title">
            <h3>JUST REACT HOOKS</h3>
          </div>
          <nav style={{ flex: 1, marginTop: 30, marginBottom: 15 }}>
            <ul>
              <li>
                <Link to="/beer-factory">Beer Factory</Link> 
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/beer-factory" component={BeerFactory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
