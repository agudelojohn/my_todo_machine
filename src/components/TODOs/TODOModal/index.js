import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";
import tasksImage from "./../statics/tasks.png";

import "./styles.css";

function TodoModal({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleClick = () => {
    handleAdd();
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") handleAdd();
  };

  const handleAdd = () => {
    addTask(newTask);
    setNewTask("");
  };

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
          fullWidth
          className="modalInput"
          value={newTask}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem" }}
          onClick={handleClick}
        >
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
