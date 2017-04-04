import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './List';

class App extends Component {
  constructor() {
    super(props);
    this.state = {
      item: '',
      date: ''
    }
  }
  addTodo() {
    this.props.addTodo();
  }
  render() {
    return (
      <div className="AppComponent">
        <h1>React/Redux Todo List</h1>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Please enter a todo item"
            />
            <input
              className="form-control"
              type="datetime-local"
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
          >
          Submit
          </button>
        </div>
        {
          this.props.todos !== null
          ? <List />
          : <div></div>
        }
      </div>
    )
  }
}

export default connect()(App);
