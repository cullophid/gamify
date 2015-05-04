'use strict';
import React from 'react';
import R from 'ramda';
import dispatcher from '../../services/dispatcher';
import NewTaskForm from './NewTaskForm';

export default React.createClass({
  render : function () {
    var tasks = this.props.tasks;
    return (
      <div className="col-md-8 col-md-offset-2 clearfix">
        <ul className="list-group">
          {R.map(renderTask, tasks || [])}
        </ul>
        <NewTaskForm/>
        </div>
    );
  }
});

function renderTask (task) {
  return (
    <li className="list-group-item">
      <span>{task.name}</span>
      <button className="btn btn-xs btn-success pull-right" onClick={completeTask.bind(null, task)}>
        <span>complete</span>
      </button>
    </li>
  );
}

function completeTask (task) {
  dispatcher.dispatch({
    actionType: 'COMPLETE_TASK',
    task : task
  });
  console.log(task);
}
