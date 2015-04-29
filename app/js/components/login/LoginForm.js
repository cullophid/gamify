'use strict';
var dispatcher = require('../../services/dispatcher');
var React = require('react');
var R = require('ramda');

module.exports = React.createClass({
  render : function () {
    return (
      <form onSubmit={this.authenticate} ref="loginform" className="valign-center col-sm-4 col-sm-offset-4 col-xs-10 col-xs-offset-1">
        <div className="form-group">
          <label>email</label>
          <input type="email" className="form-control" ref="email"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary btn-block" value="Go"/>
        </div>
      </form>
    );
  },

  authenticate : function (e) {
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    dispatcher.dispatch({
      actionType: 'AUTHENTICATE_USER',
      credentials: {
        email: email
      }
    });

  }
});
