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
                  <div className="todo-item">
                    <span>{todo.item} </span>
                    <span><em>{moment(new Date(todo.date)).fromNow()}</em></span>
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
