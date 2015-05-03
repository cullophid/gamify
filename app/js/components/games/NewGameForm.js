'use strict';
import React from 'react';
import R from 'ramda';
import dispatcher from '../../services/dispatcher';
import * as utils from '../../services/utils';
export default React.createClass({
  getInitialState: () => {
    return {show: false};
  },
  show: function () { this.setState({show: true});},
  hide: function () {this.setState({show: false});},
  render : function () {
    if (this.state.show) {
      return this.renderForm();
    }
    return this.renderButton();
  },
  renderButton: function () {
    return (
      <div className="">
        <button className="btn btn-success" onClick={this.show}>New Game</button>
      </div>
    );
  },
  renderForm: function () {
    return (
      <div className="well clearfix">
        <form onSubmit={this.createNewGame}>
          <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" name="name"/>
          </div>
          <div className="form-group">
            <label>description</label>
            <input type="text" className="form-control" name="description"/>
          </div>
          <div className="btn-group pull-right">
            <a className="btn btn-default" onClick={this.hide}>cancel</a>
            <input type="submit" className="btn btn-success" value="Create"/>
          </div>
        </form>
      </div>
    );
  },
  createNewGame : function (event) {
    event.preventDefault();
    this.setState({show:false});
    var game = utils.getFormModel(event.target);
    dispatcher.dispatch({
      actionType: 'CREATE_GAME',
      game: game
    });
  }
});
