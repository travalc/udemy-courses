import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, deleteAll } from '../actions';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      date: ''
    }
  }
  addTodo() {
    this.props.addTodo(this.state.item, this.state.date);
  }
  render() {
    console.log(this.props);
    return (
      <div className="AppComponent">
        <h1>React/Redux Todo List</h1>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Please enter a todo item"
              onChange={event => this.setState({item: event.target.value})}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({date: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addTodo()}
          >
          Submit
          </button>
        </div>
        <List parent={this.props}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTodo, deleteTodo, deleteAll}, dispatch);
}

function mapStateToProps(state) {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
