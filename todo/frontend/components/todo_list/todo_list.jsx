import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({todos, receiveTodo, removeTodo }) => {
  const listItems = todos.map ((todo, idx) => (
    <TodoListItem key={idx} item={todo} removeTodo={ removeTodo }/>));

  return (
    <div className="list">
      <ul className='todo-items'>
        {listItems}
      </ul>
      <TodoForm receiveTodo={ receiveTodo }/>
    </div>
  );
};

export default TodoList;
