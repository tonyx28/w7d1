import { connect } from 'react-redux';
import TodoList from './todo_list';
import { receiveTodo } from '../../actions/actions';
import { removeTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';
import TodoForm from './todo_form';

const mapStateToProps = (state) => ({
  todos: allTodos(state)  // not working?
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo))
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
