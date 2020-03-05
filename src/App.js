import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../src/pages/Home";
import TravelPage from "./pages/Travel/TravelPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <CssBaseline />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/travel">
        <TravelPage />
      </Route>
    </Router>
  );
};
export default App;
