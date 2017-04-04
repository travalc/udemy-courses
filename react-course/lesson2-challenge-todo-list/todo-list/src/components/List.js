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
        <ul className="list-group col-sm-4">
          {
            this.props.parent.todos.map(todo =>{
              return (
                <li key={todo.id} className="todo list-group-item">
                  <div className="todo-item">
                    <span>{todo.item} </span>
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
      </div>
    )
  }
}


export default List;
