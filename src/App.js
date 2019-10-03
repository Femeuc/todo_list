import React from 'react';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Eat breakfast with family",  
        completed: false
      },
      {
        id: 2,
        title: "Go to work",                
        completed: false
      },
      {
        id: 3,
        title: "Eat lunch during break",   
        completed: false
      }
    ]
  }

  // This method is responsible for toggling the boolean completed value.
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    })})
  }

  // This method is responsible for deleting todo items      
  delItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter((item) => item.id !== id)] 
    });
  };

  addItem = (title) => {
    const newItem = {
      id: 4,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delItem={this.delItem} /> 
        <AddTodo addItem={this.addItem}/>
      </div>   
    );
  }
}

export default App;
