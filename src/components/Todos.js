import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import { todos } from '../data/todoData.js';
import Todo from './Todo.js';

class Todos extends Component {
  state = {
    todos: [],
  };

  componentWillMount() {
    this.setState({ todos });
  }

  render() {
    return <ul>{this.state.todos.map(todo => <Todo key={todo.id} heading={todo.heading} detail={todo.detail} />)}</ul>;
  }
}

export default Todos;
