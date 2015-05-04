'use strict';
import React from 'react';
import R from 'ramda';
import dispatcher from '../../services/dispatcher';
import * as utils from '../../services/utils';

export default React.createClass({
  getInitialState: function (props) {
    return {show: false};
  },

  render: function () {
    if (this.state.show) {
      return this.renderForm();
    }
    return this.renderButton();
  },

  renderForm: function () {
    return (
      <div className="well clearfix">
        <form onSubmit={this.createNewTask}>
          <div className="form-group">
            <label>name</label>
            <input type="text" className="form-control" name="name"/>
          </div>
          <div className="form-group">
            <label>description</label>
            <textarea className="form-control" name="description"></textarea>
          </div>
          <div className="form-group">
            <label>value</label>
            <input type="number" className="form-control" name="value"/>
          </div>
          <div className="btn-group pull-right">
            <a className="btn btn-default" onClick={this.hideForm}>cancel</a>
            <input type="submit" className="btn btn-success" value="Create"/>
          </div>
        </form>
      </div>
    );
  },

  renderButton: function () {
    return (
      <div className="">
        <button className="btn btn-success" onClick={this.showForm}>New Task</button>
      </div>
    );
  },

  showForm: function () {
    this.setState({show: true});
  },

  hideForm: function () {
    this.setState({show: false});
  },

  createNewTask: function (event) {
    event.preventDefault();
    this.setState({show:false});
    var task = utils.getFormModel(event.target);
    dispatcher.dispatch({
      actionType: 'CREATE_TASK',
      task: task
    });
  }
});
