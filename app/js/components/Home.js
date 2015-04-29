'use strict';
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SideBar = require('./sidebar').SideBar;
var sessionStore = require('../stores/sessionStore');

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
    this.setState({session: sessionStore.get()});
  },
  render : function () {
    var session = this.state.session || {};
    return (
      <div className="full-height">
        <aside className="col-sm-3 full-height-sm  bg-dark fixed">
          <SideBar user={session.user}/>
        </aside>
        <div className="col-sm-9 scroll full-height">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});
