import React from "react";
import { Switch, Route } from "react-router-dom";

import PorAtleta from "../pages/PorAtleta";
import PorEquipe from "../pages/PorEquipe";

const Routes = () => {
  return (
    <Switch>
      <Route path="/atletas" component={PorAtleta} />

      <Route path="/equipes" component={PorEquipe} />
    </Switch>
  );
};

export default Routes;
