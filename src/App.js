import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navi from './Components/Navi';
import Profile from './Components/Profile';
import Game from './Components/Game';
import Home from './Components/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navi></Navi>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Navi}/>
  

        </Switch>
      </header>
      <div className = "App-body">
        <Switch>
          <Route path="/game" component={Game}/>  
        </Switch>
      </div>
      
      <div className = "App-body">
        <Switch>
          <Route path="/profile" component={Profile}/>  
        </Switch>
      </div>
    
      </div>
    </Router>
  );
  }

export default App;
