import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import PropTypes from 'prop-types';

const Todo = ({ heading, detail }) => <li>{`${heading} - ${detail}`}</li>;

//{todos.heading}, {todos.detail</ul>;

Todo.propTypes = {
  heading: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default Todo;
