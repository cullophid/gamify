var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Login = require('./Login.jsx');

var routes =  (
  <Route name="login" path="/" handler={Login}/>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
