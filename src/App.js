import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTodo: {
        item: '',
        dueDate: '',
        completed: false,
      },
    }
  }

  handleChangeForTodo = (key) => (event) => {
    this.setState({
      ...this.state,
      newTodo: {
        ...this.state.newTodo,
        [key]: event.target.value,
      }
      
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { item, dueDate } = this.state.newTodo;
    if (!item || !dueDate) {
      alert('You must include a "to-do" item AND a "due date"');
      return;
    }
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: {
        item: '',
        dueDate: '',
        completed: false,
      },
    });
  }

  deleteItem = (i) => {
    const todos = [...this.state.todos];
    todos.splice(i, 1);
    this.setState({
      ...this.state,
      todos: todos,
    })    
  }

  completeItem = (i) => {
    const todos = [...this.state.todos];
    todos[i].completed = !todos[i].completed;
    todos.sort( (a, b) => a.completed > b.completed ? 1 : -1);
    this.setState({
      ...this.state,
      todos: todos,
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Form newTodo={this.state.newTodo} handleChangeForTodo={this.handleChangeForTodo} handleSubmit={this.handleSubmit} />
        <List todos={this.state.todos} deleteItem={this.deleteItem} completeItem={this.completeItem} />
      </div>
    );
  }
}

export default App;
