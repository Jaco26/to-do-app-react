import React, { Component } from 'react';

class Form extends Component {

  render (props) {    
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input 
            type="text" 
            value={this.props.newTodo.item} 
            onChange={this.props.handleChangeForTodo('item')}
            placeholder="New to-do item"
          />
          <input type="date" value={this.props.newTodo.dueDate} onChange={this.props.handleChangeForTodo('dueDate')} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;