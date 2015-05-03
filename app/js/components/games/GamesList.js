'use strict';
import R from 'ramda';
import React from 'react';
import {Link} from 'react-router';
import GamesList from './GamesList';
import * as gamesListStore from '../../stores/gamesListStore';
import NewGameForm from './NewGameForm';

module.exports = React.createClass({
  getInitialState: function () {
    return {
      gamesList: gamesListStore.get()
    };
  },
  componentDidMount: function() {
    gamesListStore.onChange(this.handleChange);
  },
  componentWillUnmount: function() {
    gamesListStore.removeListener(this.handleChange);
  },
  handleChange: function () {
    this.setState({
      gamesList : gamesListStore.get()
    });
  },
  render : function () {
    var gamesList = this.state.gamesList || [];
    return (
      <div className="full-height scroll">
        <h1>Games</h1>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <ul className="list-group">
              {R.map(renderGame, gamesList)}
            </ul>
            <NewGameForm/>
          </div>
        </div>
      </div>
    );
  }
});

function renderGame (game) {
  return (
    <li className="list-group-item">
      <Link to="game" params={{gameId: game._id}}>{game.name}</Link>
    </li>
  );
}
