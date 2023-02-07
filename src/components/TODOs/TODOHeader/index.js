import React from "react";
import { Paper, Typography } from "@mui/material";

function TodoHeader({ done, total }) {
  return (
    <Paper elevation={3} sx={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h1">Your tasks</Typography>
      <Typography variant="h4">
        Completed {done} of {total}
      </Typography>
    </Paper>
  );
}

export { TodoHeader };
