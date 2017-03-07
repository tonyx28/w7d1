import React from 'react';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = merge({},this.state, {id: new Date().getTime()});

    this.props.receiveTodo(newState);
    this.setState({title: "", body: ""});
  }
  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type='text'
              onChange={this.update('title')}
              value={this.state.title}
            />
          </label>
          <label>Body:
            <input
              type='text'
              onChange={this.update('body')}
              value={this.state.body}
            />
          </label>
          <button>Add New Todo!</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
