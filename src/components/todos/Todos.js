import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {

    render() {
        return (
          <ul className="todos">
            {this.props.todos.map((item) => (
            <TodoItem key={item.id} item={item} toggleComplete={this.props.toggleComplete} delItem={this.props.delItem} />    
            ))}
          </ul>
        );
    }
}

export default Todos;