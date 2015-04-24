'use strict';
var React = require('react');

module.exports = React.createClass({
  render : function () {
    return (
      <form className="col-sm-4 col-sm-offset-4 valign-center col-xs-10 col-xs-offset-1">
        <div className="form-group">
          <label>email</label>
          <input type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="submit" value="login" className="btn btn-primary btn-block"/>
        </div>
      </form>
    );
  }
});
