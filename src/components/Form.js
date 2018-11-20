import React from "react";
import List from "./List";

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
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Todo:
            <input
              type="text"
              name="name"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <List todos={this.state.todos} />
      </>
    );
  }
}

export default Form;
