'use strict';
import dispatcher from '../services/dispatcher';
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
    return {user: sessionStore.getUser()};
  },

  componentDidMount: function() {
    sessionStore.onChange(this.handleChange);
    if (!sessionStore.get()) {
      dispatcher.dispatch({
        actionType: 'FETCH_SESSION'
      });
    }
  },

  componentWillUnmount: function() {
    sessionStore.removeListener(this.handleChange);
  },

  handleChange: function () {
    if (!sessionStore.getUser()) {
      this.context.router.transitionTo('/login');
    }
    this.setState({user: sessionStore.getUser()});
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
