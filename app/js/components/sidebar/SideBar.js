'use strict';
var React = require('react');
var Router = require('react-router');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render : function () {
    var user = this.props.user || {};
    return (
      <div className="v-gutter">
        <div  className="row media container-fluid">
          <div className="media-left">
            <div className="glyphicon glyphicon-user glyphicon-large"></div>
          </div>
          <div className="media-body">
            <span className="h4">{user.firstname + ' ' + user.lastname}</span>
            <p>{user.score}</p>
          </div>
        </div>
      </div>
    );
  }
});
