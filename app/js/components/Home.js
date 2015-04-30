'use strict';
var R = require('ramda');
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SideBar = require('./sidebar').SideBar;
var sessionStore = require('../stores/sessionStore');
var userScoreStore = require('../stores/userScoreStore');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState: function () {
    return {session: sessionStore.get()};
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
      this.context.router.transitionTo('/login');
    }
    var user = R.merge(sessionStore.getUser(), {score: userScoreStore.get()});
    this.setState(user);
  },
  render : function () {
    var user = this.state.user || {};
    return (
      <div className="full-height">
        <aside className="col-sm-3 full-height-sm  bg-dark fixed">
          <SideBar user={user}/>
        </aside>
        <div className="col-sm-9 scroll full-height">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});
