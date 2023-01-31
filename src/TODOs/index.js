import React from "react";

import { Grid, Box } from "@mui/material";

import { TodoHeader } from "./TODOHeader";
import { TodoList } from "./TODOList";
import { TodoModal } from "./TODOModal";

function TodoCounter() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TodoModal />
        </Grid>
        <Grid item xs={6}>
          <TodoHeader />
          <TodoList itemList={[1, 2, 3, 4]} />
        </Grid>
      </Grid>
    </Box>
  );
}

export { TodoCounter };
