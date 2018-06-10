import React, { Component } from 'react';

class List extends Component {

  render () {

    const completeStyle = {
      backgroundColor: '#88ff8c',
    }

    const incompleteStyle = {
      backgroundColor: '#ff888c',
      color: 'beige',
    }

    const listItems = this.props.todos.map( (todo, i) => (
        <li key={i} style={todo.completed ? completeStyle : incompleteStyle}> 
          {todo.item} &nbsp; Due: {todo.dueDate}
          <button onClick={ () => this.props.completeItem(i)}>
            {todo.completed ? 'Reopen' : 'Complete'}
          </button> 
          <button onClick={ () => this.props.deleteItem(i)}>Delete</button> 
        </li>
      )
    );

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default List;