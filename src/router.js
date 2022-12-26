// imports
import { Analytics } from "@mui/icons-material";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { LandingPage, Login, Register, Dashboard, Portfolio, About, Coin } from "./pages";

// export the router
export default (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/coins/:coin" component={Coin} />
    </Switch>
  </Router>
);
