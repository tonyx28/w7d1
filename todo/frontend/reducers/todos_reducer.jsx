import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/actions';
import { REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = action.todos;
      return newState;
    case RECEIVE_TODO:
      newState = merge({},state);
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      newState = merge({},state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
