'use strict';
var React = require('react');
var R = require('ramda');
var dispatcher = require('../../services/dispatcher');

module.exports = React.createClass({
  render : function () {
    var tasks = this.props.tasks;
    return (
      <div className="col-md-8 col-md-offset-2 clearfix">
        <ul>
          {R.map(renderTask, tasks || [])}
        </ul>
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
