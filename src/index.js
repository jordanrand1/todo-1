import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import "semantic-ui-css/semantic.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
