import React from "react";
import ListView from "./ListView";
import { Input } from "semantic-ui-react";

class Form extends React.Component {
  state = {
    input: "",
    todos: []
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState(
      {
        todos: [...this.state.todos, this.state.input],
        input: ""
      },
      console.log(this.state.todos)
    );
  };

  delete = index => {
    this.state.todos.splice(index, 1);
    console.log("made it");
    console.log(this.state.todos);
    this.setState({
      todos: this.state.todos
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Todo:
            <Input
              type="text"
              name="name"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <ListView todos={this.state.todos} delete={this.delete} />
      </>
    );
  }
}

export default Form;
