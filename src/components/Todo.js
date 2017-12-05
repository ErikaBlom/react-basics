import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import PropTypes from 'prop-types';

const Todo = ({ heading, detail }) => (
  //const todoHeading = todos.map((todo) => <li>{props.heading}</li>);
  //const todoDetail = <li>{props.detail}</li>;
  //todos.map(todo => <li>{todo.header}</li>);

  <li>
    {heading}, {detail}
  </li>
);

//{todos.heading}, {todos.detail</ul>;

Todo.propTypes = {
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,

};

export default Todo;
