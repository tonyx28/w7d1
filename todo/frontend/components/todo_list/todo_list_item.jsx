import React from 'react';

// const TodoListItem = ({item}) => (
//     <li>
//       {item.title}
//       <button onClick={ removeTodo }>Delete</button>
//     </li>
// );


class TodoListItem extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (e) {
    e.preventDefault();
    // debugger;
    this.props.removeTodo(this.props.item);
  }

  render () {
    // debugger;
    return (
      <li className="todo-list-item">
        {this.props.item.title}
        <button onClick={ this.handleDelete }>Delete</button>
      </li>
    );
  }
}
export default TodoListItem;
