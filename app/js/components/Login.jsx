'use strict';
var React = require('react');
var Loginbox = require('./LoginBox.jsx');


module.exports = React.createClass({
  render : function () {
    return (
      <div className="full-screen flex">
        <Loginbox/>
      </div>
    );
  }
});
