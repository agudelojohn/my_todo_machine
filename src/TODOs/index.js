import React, { Fragment } from "react";

import { TodoHeader } from "./TODOHeader";
import { TodoList } from "./TODOList";

function TodoCounter() {
  return (
    <Fragment>
      <TodoHeader />
      <TodoList itemList={[1, 2, 3, 4]} />
    </Fragment>
  );
}

export { TodoCounter };
