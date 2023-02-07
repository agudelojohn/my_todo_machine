import React, { Fragment } from "react";
import { TodoItem } from "../TODOItems";

function TodoList({ handleCheck, itemList }) {
  return (
    <Fragment>
      {itemList.map((item) => (
        <TodoItem taskName={item} key={item} taskDone={handleCheck} />
      ))}
    </Fragment>
  );
}

export { TodoList };
