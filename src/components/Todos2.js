import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import { todos, addTodo} from '../data/todoData.js';
import Todo2 from './Todo2.js';

class Todos2 extends Component {

    state = {todos: [], heading: '', detail: '', dueDate: ''}
    ;

        componentDidMount()
        {
            this.setState({todos});
        };

        onChangeHandler = (e) =>
        {
            console.log(this.state.todoVal);
            this.setState({[e.target.id]: e.target.value})

            const test = {
                prop1: 1,
                prop2: 2
            };

            console.log(Object.keys(test));
            console.log(test);
            test.prop1 = 3;
            console.log(test);
            test['prop1'] = 4;
            console.log(test);
        };

        onClickHandler = (e) =>
        {
            e.preventDefault();
            const {heading, detail, dueDate} = this.state;
            addTodo({
                heading,
                detail,
                dueDate
            });
            this.setState({todos: todos});
            console.log({todos})
        };

        // componentWillUpdate(nextProps, nextState)
        // {
        //
        // };

        render()
        {
            const {todos, heading, detail, dueDate} = this.state;
            return (

                <div className="col-lg-12">
                    <ul>{todos.map((todo) => <Todo2 key={todo.id} heading={todo.heading} detail={todo.detail}
                                                               dueDate={todo.dueDate}/>)}</ul>
                    <form>
                    <div className="col-lg-2">
                        <label htmlFor="todo">Todo</label>
                        <input type="text" id="heading" value={heading} onChange={this.onChangeHandler}></input>
                        <label htmlFor="detail">Details</label>
                        <input type="text" id="detail" value={detail} onChange={this.onChangeHandler}></input>
                        <label htmlFor="dueDate">Due date</label>
                        <input type="text" id="dueDate" value={dueDate} onChange={this.onChangeHandler}></input>
                        <button type="submit" onClick={this.onClickHandler}>Add item</button>

                           <select className="col-lg-12">
                           <option value="select">- Select -</option>
                           <option value="a">A</option>
                           <option value="b">B</option>
                           <option value="c">C</option>
                        </select>

                    </div>
                    </form>
                </div>
            )
        };
}
export default Todos2;