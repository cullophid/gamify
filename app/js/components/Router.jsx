var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Login = require('./Login.jsx');
var App = require('./App.jsx');
var Games = require('./Games.jsx');

var routes =  (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="games" path="/games" handler={Games}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
