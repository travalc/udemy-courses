import { ADD_TODO, DELETE_TODO, DELETE_ALL, TOGGLE_VISIBILITY } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const todo = (action) => {
  return {
    item: action.item,
    date: action.date,
    visible: true,
    id: Math.random()
  }
}

const deleteTodoById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  return todos;
}

const updateVisibility = (state = [], id, visibility) => {
  let updatedTodo = null;
  let todos = [];
  for (let i = 0; i < state.length; i++) {
    if(state[i].id !== id) {
      todos.push(state[i]);
    }
    else if (state[i].id === id) {
      updatedTodo = {
        item: state[i].item,
        date: state[i].date,
        visible: visibility,
        id: id
      };
      todos.push(updatedTodo);
    }
  }
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
    case TOGGLE_VISIBILITY:
      todos = updateVisibility(state, action.id, action.visibility);
      
      return todos;
    default:
      return state;
  }
}

export default todos;
