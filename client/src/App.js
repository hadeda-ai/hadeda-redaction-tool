import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Home from "./components/Home";
import Submit from "./components/Submit";
import Review from "./components/Review";
import Output from "./components/Output";


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
         HADEDA
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/submit"} className="nav-link">
              Submit
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/review/:id"} className="nav-link">
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/output"} className="nav-link">
              Output
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/submit" component={Submit} />
          <Route path="/review/:id" component={Review} />
          <Route path="/output/:id" component={Output} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
