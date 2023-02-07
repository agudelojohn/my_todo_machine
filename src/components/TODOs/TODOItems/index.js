import React, { Fragment, useState } from "react";
import { Paper, Grid, Typography, Checkbox } from "@mui/material";

function TodoItem({ taskName, taskDone }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event) => {
    taskDone(!checked);
    setChecked(!checked);
  };

  return (
    <Fragment>
      <Paper sx={{ marginTop: "1rem" }}>
        <Grid container direction="row">
          <Grid xs={2} item>
            <Checkbox
              checked={checked}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
              onChange={handleCheck}
            />
          </Grid>
          <Grid xs={10} item>
            <Typography
              variant="h4"
              sx={{
                textDecoration: `${checked ? "line-through" : "none"}`,
                alignItems: "center",
              }}
            >
              {taskName}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
}

export { TodoItem };
