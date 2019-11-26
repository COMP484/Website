import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navi from './Components/Navi';
import Game from './Components/Game';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path="/" component={Navi}/>
      </Switch>
      </header>
      <div className= "App-body">
        <Switch>
           
        </Switch>
      </div>
    </div>
    </Router>
  );
  }

export default App;