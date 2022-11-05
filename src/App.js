import classes from "./App.module.css";
import React from "react";

import Footer from "./pages/components/Footer/Footer";

import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      <div className={classes.line}></div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
