import React, { Component } from 'react';
import moment from 'moment';

class List extends Component {
  render() {
    return(
      <div className="ListComponent">
        <ul className="list-group col-sm-4">
          {
            this.props.parent.todos.map(todo => {
              if (todo.visible === true) {

              return (
                <li key={todo.id} className="todo list-group-item">
                  <div className="todo-item todo-text">
                    <span className="todo-text">{todo.item} </span>
                    <span><em>{moment(new Date(todo.date)).fromNow()}</em></span>
                  </div>
                  <div className="option-buttons">
                    <div className="edit-icon todo-item"
                         onClick={() => this.props.parent.toggleVisibility(todo.id, false)}
                    >
                      <span className="glyphicon glyphicon-pencil"></span>
                    </div>
                    <div className="delete-icon todo-item glyphicon glyphicon-trash"
                         onClick={() => this.props.parent.deleteTodo(todo.id)}
                    >
                    </div>
                  </div>
                </li>

              )
            }
            else {
              return (
                <li key={todo.id}>
                <div className="todo-edit form-inline">
                  <div className="form-group">
                    <input
                      className="form-control edit-item-input"
                      placeholder={todo.item}
                    />
                    <input
                      className="form-control edit-date-input"
                      type="datetime-local"
                      placeholder={todo.date}
                    />
                    <span
                      className="save-icon glyphicon glyphicon-ok"
                    >
                    </span>
                    <span
                      className="cancel-icon"
                      onClick={() => this.props.parent.toggleVisibility(todo.id, true)}
                    >
                      &#x2715;
                    </span>
                  </div>
                </div>
                </li>
              )
            }
            })
          }
        </ul>
      </div>
    )
  }
}


export default List;
