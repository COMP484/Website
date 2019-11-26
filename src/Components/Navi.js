import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Game from './Game';
import Profile from './Profile';
import Home from './Home';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles} from '@material-ui/core'
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
      border: 0,
      borderRadius: 3,
      color: 'white',
      width: 1000
    },
    menuButton: {
      marginRight: theme.spacing(10),
    },
    loginButton:{
        fontSize: 50,
        marginLeft: theme.spacing(7),
    
    },
    title: {
      flexGrow: 1,
      fontSize: 120,
    },
  }));

export class Navi extends Component {
    render() {
        const {classes} = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to= "/Home" edge="start" className={classes.menuButton} color="red" aria-label="menu">
              Home
          </IconButton>
          <IconButton component={Link} to= "/Game" edge="start" className={classes.menuButton} color="red" aria-label="menu">
              Game
          </IconButton>
          <IconButton component={Link} to= "/Profile" edge="start" className={classes.menuButton} color="red" aria-label="menu">
              Profile
          </IconButton>
          <Typography variant="h6" className={classes.title}>
             Gameboard
          </Typography>
        </Toolbar>
      </AppBar>

    <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Game" component={Game}/>
        <Route path="/Profile" component={Profile}/>
    </Switch>
    </div>
  );
    }
}

export default withStyles(useStyles)(Navi);