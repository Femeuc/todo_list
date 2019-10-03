import React from 'react';

class TodoItem extends React.Component {

    getStyle = () => {
        return {
            background: 'rgb(255, 255, 200)',
            textDecoration: this.props.item.completed ? 'line-through' : 'none'
        };
    }

    render() {
        return (
        <li className="todo-item" style={this.getStyle()}> 
          <input type="checkbox" onClick={this.props.toggleComplete.bind(this, this.props.item.id)}/> {' '}
          {this.props.item.title}
          <span className="delete" onClick={this.props.delItem.bind(this, this.props.item.id)}> X </span>
        </li>);
    }
}

export default TodoItem;