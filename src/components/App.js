import React, {Component} from 'react';
import logo from '../QDelft_logo.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Todos from './Todos.js';

class App extends Component {
  //componentWillMount() {
  //  this.setState({todos});
  //}
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">QDelft Basic React To Do</h1>
        </header>
        <div className="row">
          <div className="col-xs-12">
            <p className="App-intro" />
            <Todos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
