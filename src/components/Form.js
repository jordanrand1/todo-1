import React from "react";

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
    this.setState({
      todos: [...this.state.todos, this.state.input]
    });
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
          <input type="submit" value="Submit" />
        </form>

        <ul />
      </>
    );
  }
}

export default Form;
