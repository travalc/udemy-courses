import { ADD_TODO, DELETE_TODO, DELETE_ALL } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

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
  state = read_cookie('todos');
  switch (action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      bake_cookie('todos', todos);
      return todos;
    case DELETE_TODO:
      todos = deleteTodoById(state, action.id);
      bake_cookie('todos', todos);
      return todos;
    case DELETE_ALL:
      todos = [];
      bake_cookie('todos', todos);
      return todos;
    default:
      return state;
  }
}

export default todos;
