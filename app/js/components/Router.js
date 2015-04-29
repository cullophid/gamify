'use strict';
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var login = require('./login');
var App = require('./App');
var Home = require('./Home');
var games = require('./games');

var Route = Router.Route;

var routes =  (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={login.Login}/>
    <Route name="home" handler={Home}>
      <Route name="gamesList" path="/games" handler={games.GamesList}/>
        <Route name="game" path="/games/:gameId" handler={games.Game}/>
      </Route>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
