import { ADD_TODO, DELETE_TODO, DELETE_ALL } from '../constants';

const todo = (action) => {
  return {
    item: action.item,
    date: action.date,
    id: Math.random()
  }
}

const deleteTodoById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  return todos;
}

const todos = (state = [], action) => {
  let todos = null;
  switch (action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      return todos;
    case DELETE_TODO:
      todos = deleteTodoById(state, action.id);
      return todos;
    case DELETE_ALL:
      todos = [];
      return todos;
    default:
      return state;
  }
}

export default todos;
