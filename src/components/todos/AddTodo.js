import React from 'react';

class TodoItem extends React.Component {

    state = {
      title: ''
    }

    setTitle = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    addItem = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.title);
      this.setState({ title: '' });
    }

    render() {
        return (
          <form className="add-todo" onSubmit={this.addItem}>
            <input type="text" name="title" placeholder="Add todo item" value={this.state.title} onChange={this.setTitle}/>
            <input type="submit" value="Submit Todo" />
          </form>
        );
    }
}

export default TodoItem;