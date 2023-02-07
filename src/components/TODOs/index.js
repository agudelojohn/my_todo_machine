import React, { useState } from "react";

import { Grid, Box } from "@mui/material";

import { TodoHeader } from "./TODOHeader";
import { TodoList } from "./TODOList";
import { TodoModal } from "./TODOModal";

function TodoCounter() {
  const [todoList, setTodoList] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [todosDone, setTodosDone] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TodoModal />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            spacing={2}
            sx={{ maxWidth: "90%", margin: "auto", paddingTop: "2rem" }}
          >
            <TodoHeader done={todosDone} total={todoList.length} />
            <TodoList itemList={todoList} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export { TodoCounter };
