import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

import BeerFactory from './examples/beer-factory/beer-factory';
import HeroView from './examples/hero-list/hero-view';
import FirstHook from './examples/first-hook/first-hook';

const App = () => (
  <div className="App">
    <Router>
      <header className="App-header">
        <div className="App-title">
          <h3>JUST REACT HOOKS</h3>
        </div>
        <nav style={{ flex: 1, marginTop: 30, marginBottom: 15 }}>
          <ul>
            <li>
              <Link to="/first-hook">First Hook</Link>
            </li>
            <li>
              <Link to="/beer-factory">Beer Factory</Link>
            </li>
            <li>
              <Link to="/hero-list">Hero List</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/first-hook" component={FirstHook} />
        <Route path="/beer-factory" component={BeerFactory} />
        <Route path="/hero-list" component={HeroView} />
      </Switch>
    </Router>
  </div>
);

export default App;
