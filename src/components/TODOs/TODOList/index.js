import React, { Fragment } from "react";
import { TodoItem } from "../TODOItems";

function TodoList(props) {
  return (
    <Fragment>
      <h1>Todo list</h1>
      {props.itemList.map((item) => (
        <TodoItem />
      ))}
    </Fragment>
  );
}

export { TodoList };
