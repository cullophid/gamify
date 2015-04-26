'use strict';
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var sessionStore = require("../stores/sessionStore");

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount: function() {
    sessionStore.onChange(this.handleChange);
    this.handleChange();
  },

  componentWillUnmount: function() {
    sessionStore.removeListener(this.handleChange);
  },
  handleChange: function () {
    if (!sessionStore.get()) {
      this.context.router.transitionTo('/login')
    }
  },
  render : function () {
    return (
      <RouteHandler/>
    );
  }
});
