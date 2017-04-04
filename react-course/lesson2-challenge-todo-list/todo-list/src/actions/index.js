import { ADD_TODO, DELETE_TODO, DELETE_ALL } from '../constants';

export const addTodo = () => {
  const action = {
    type: ADD_TODO
  }
  return action;
}

export const deleteTodo = () => {
  const action = {
    type: DELETE_TODO
  }
  return action;
}

export const deleteAll = () => {
  return {
    type: DELETE_ALL
  }
}
