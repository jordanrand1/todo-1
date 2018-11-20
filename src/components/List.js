import React from "react";

const List = props => (
  <ul>
    {props.todos.map((todo, index) => (
      <li key={index}>
        {console.log(todo)}
        <p>{todo}</p>
      </li>
    ))}
  </ul>
);

export default List;
