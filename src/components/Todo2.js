import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import PropTypes from 'prop-types';

const Todo2 = ({heading, detail, dueDate}) => <li>{`${heading} - ${detail} - ${dueDate}`}</li>

Todo2.propTypes = {
    heading: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired
};

export default Todo2;
