import React, { memo } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

import { MenuItens } from "./utils/menu";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Menu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {MenuItens.map(({ grupo, lista }) => (
          <div key={Math.random()}>
            <h3> {grupo} </h3>
            <Divider />

            {lista.map(({ nome, icone, path }) => (
              <Link to={path} key={Math.random()}>
                <ListItem button>
                  <ListItemIcon button>
                    <ListItemIcon>{icone()}</ListItemIcon>
                    <ListItemText primary={nome} />
                  </ListItemIcon>
                </ListItem>
              </Link>
            ))}
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Drawer
        key={Math.random()}
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default memo(Menu);
