'use strict';
var React = require('react');
var R = require('ramda');
var dispatcher = require('../../services/dispatcher');
var gameStore = require('../../stores/gameStore');
var TaskList = require('./TaskList');

module.exports = React.createClass({
  contextTypes: {router: React.PropTypes.func},
  getInitialState: function () {
    return {
      game: gameStore.get() || {}
    };
  },
  componentDidMount: function() {
    dispatcher.dispatch({
      actionType: 'UPDATE_GAME',
      gameId : this.context.router.getCurrentParams().gameId
    });
    gameStore.onChange(this.handleChange);
  },
  componentWillUnmount: function() {
    gameStore.removeListener(this.handleChange);
  },
  handleChange: function () {
    this.setState({
      game : gameStore.get()
    });

  },
  render : function () {
    var game = this.state.game;
    if (!game) {
      return;
    }
    return (
      <div>
        <h1>{game.name}</h1>
        <TaskList tasks={game.tasks}/>
      </div>
    );
  }
});
