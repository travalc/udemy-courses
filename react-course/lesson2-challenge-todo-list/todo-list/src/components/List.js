import React, { Component } from 'react';
import moment from 'moment';

class List extends Component {
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
                  <div className="todo-item todo-text">
                    <span>{todo.item} </span>
                    <span><em>{moment(new Date(todo.date)).fromNow()}</em></span>
                  </div>
                  <div className="option-buttons">
                  <div className="edit-icon todo-item">
                    <span className="glyphicon glyphicon-pencil"></span>
                  </div>
                  <div className="delete-icon todo-item" onClick={() => this.props.parent.deleteTodo(todo.id)}>
                    <span>&#x2715;</span>
                  </div>
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
