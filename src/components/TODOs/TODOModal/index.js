import React from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";
// import tasksImage from "./../../../public/img/tasks.png";
import tasksImage from "./../statics/tasks.png";

import "./styles.css";

function TodoModal() {
  return (
    <Paper variant="outlined" className="modalContainer">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="modalGrid"
      >
        <h1 className="modalTitle">Create new task</h1>
        {/* TODO:Label */}
        <TextField
          id="standard-full-width"
          label="Task Name"
          // helperText="Full width!"
          fullWidth
          className="modalInput"
        />
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Add task
        </Button>
        <img src={tasksImage} alt="Tasks cover" />
      </Grid>
    </Paper>
  );
}

export { TodoModal };

/*
<Paper variant="outlined" className="modalContainer">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        className="modalGrid"
      >
        <Grid item sx={{ background: "red" }}>
          <h1 className="modalTitle">Create new task</h1>
        </Grid>
        <Grid item>
          <TextField
            id="standard-full-width"
            label="Task Name"
            // helperText="Full width!"
            fullWidth
            className="modalInput"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ color: "purple" }}>
            Add task
          </Button>
        </Grid>
        <Grid item>
          <img src={tasksImage} alt="Tasks cover" />
        </Grid>
      </Grid>
    </Paper>
    */
