import React, { useState } from "react";

import { Grid, Box } from "@mui/material";

import { TodoHeader } from "./TODOHeader";
import { TodoList } from "./TODOList";
import { TodoModal } from "./TODOModal";

function TodoCounter() {
  const [todoList, setTodoList] = useState([]);
  const [todosDone, setTodosDone] = useState(0);

  const handleAdd = (newTask) => {
    setTodoList([...todoList, newTask]);
  };

  const handleCheck = (isChecked) => {
    if (isChecked) {
      setTodosDone(todosDone + 1);
    } else {
      setTodosDone(todosDone - 1);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columnSpacing={{ xs: 1 }}>
        <Grid item xs={6}>
          <TodoModal addTask={handleAdd} />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            spacing={2}
            sx={{ maxWidth: "90%", margin: "auto", paddingTop: "2rem" }}
          >
            <TodoHeader done={todosDone} total={todoList.length} />
            <TodoList handleCheck={handleCheck} itemList={todoList} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export { TodoCounter };
