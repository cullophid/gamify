'use strict';
var React = require('react');
var sessionStore = require("../stores/sessionStore");
var gamesListStore = require("../stores/gamesListStore");

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    sessionStore.onChange(this.handleChange);
  },

  componentWillUnmount: function() {
    sessionStore.removeListener(this.handleChange);
  },
  handleChange: function () {

  },
  render : function () {
    return (
      <div className="">
        <h1>Games</h1>
      </div>
    );
  }
});
