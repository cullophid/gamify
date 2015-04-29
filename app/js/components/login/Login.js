'use strict';
var React = require('react');
var LoginForm = require('./LoginForm');
var sessionStore = require('../../stores/sessionStore');

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

    var session = sessionStore.get();
    if (session.hasOwnProperty('user')) {
      this.context.router.transitionTo('gamesList');
    }
  },
  render : function () {
    return (
      <div className="full-screen flex">
        <LoginForm/>
      </div>
    );
  }
});
