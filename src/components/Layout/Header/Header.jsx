import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import DrawerMenu from "../Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <DrawerMenu />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default memo(Header);
