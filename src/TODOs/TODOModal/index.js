import React from "react";
import { Paper, Grid, TextField } from "@mui/material";
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
        {/* Label */}
        <TextField
          id="standard-full-width"
          label="Task Name"
          // helperText="Full width!"
          fullWidth
          className="modalInput"
        />
        {/* Button */}
        <img src={tasksImage} alt="Tasks cover" />
      </Grid>
    </Paper>
  );
}

export { TodoModal };
