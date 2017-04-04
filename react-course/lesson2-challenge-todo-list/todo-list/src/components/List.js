import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, deleteAll } from '../actions'

class List extends Component {
  constructor(props) {
    super(props);
  }
  deleteTodo(id) {
    this.props.parent.deleteTodo(id);
  }
  render() {
    return(
      <div className="ListComponent">
        <ul>
          {
            this.props.parent.todos.map(todo =>{
              return (
                <li key={todo.id} className="todo">
                  <div className="todo-item">
                    <span>{todo.item}</span>
                    <span>{todo.date}</span>
                  </div>
                  <div className="todo-item close-icon" onClick={() => this.props.parent.deleteTodo(todo.id)}>
                    <span>&#x2715;</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.parent.deleteAll()}
        >
          Delete All
        </button>
      </div>
    )
  }
}


export default List;
