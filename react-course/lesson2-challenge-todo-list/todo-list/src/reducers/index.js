import { ADD_TODO, DELETE_TODO, DELETE_ALL } from '../constants';

const todos = (state = [], action) => {
  let todos = null;
  switch (action.type) {
    case ADD_TODO:

      return todos;
    case DELETE_TODO:

      return todos;
    case DELETE_ALL:
      todos = [];
      return todos;
    default:
      return state;
  }
}

export default todos;
