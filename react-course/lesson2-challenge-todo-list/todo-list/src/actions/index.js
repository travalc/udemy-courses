import { ADD_TODO, DELETE_TODO, DELETE_ALL } from '../constants';

export const addTodo = (item, date) => {
  const action = {
    type: ADD_TODO,
    item,
    date
  }
  return action;
}

export const deleteTodo = (id) => {
  const action = {
    type: DELETE_TODO,
    id
  }
  return action;
}

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  }
}
