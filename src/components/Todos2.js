import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import { todos } from '../data/todoData.js';
import Todo2 from './Todo2.js';

class Todos2 extends Component {


    state = {todos: []}


        componentDidMount()
        {
            this.setState({todos});
        }

        onClickHandler = () =>
        {
            todos.addTodo();
        };


        render()
        {
            return (
                <section>
                    <ul>{this.state.todos.map((todo) => <Todo2 key={todo.id} heading={todo.heading} detail={todo.detail}
                                                               dueDate={todo.dueDate}/>)}</ul>
                    <label>Todo</label>
                    <input></input>
                    <label>Details</label>
                    <input></input>
                    <label>Due date</label>
                    <input></input>
                    <button onClick={this.onClickHandler}>Add item</button>
                </section>
            )
        }
}
export default Todos2;