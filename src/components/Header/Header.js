import React from "react";
import { AppBar, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

//component renders provides the heading of the App
export const Header = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar variant="dense">
          <Grid container  justifyContent="center">
            <Typography variant="h5" color="inherit">
              Weather Portal
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
