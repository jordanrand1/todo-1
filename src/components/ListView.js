import React from "react";
import { List, Button } from "semantic-ui-react";

const ListView = props => (
  <List divided verticalAlign="middle">
    {props.todos.map((todo, index) => (
      <List.Item>
        <List.Content floated="right">
          <Button color="red" onClick={() => props.delete(index)}>
            Delete
          </Button>
        </List.Content>
        <List.Content floated="left" style={{ paddingLeft: "10px" }}>
          <List.Header>{todo}</List.Header>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default ListView;
